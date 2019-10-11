import React, { Component } from 'react';
import './News.css';
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.ign.com%2Fign%2Fgames-all%3Fformat%3Dxml'
      );
      const json = await response.json();
      this.setState({ items: json.items });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        Latest Game News from IGN.com:
        {this.state.items.map(item => (
          <div className='newsLink'>
            {' '}
            <li key={item.guid}>
              <a target='_blank' rel='noopener noreferrer' href={item.link}>
                {item.title}
              </a>
            </li>{' '}
          </div>
        ))}
        Visit daily for the newest news.
      </div>
    );
  }
}
