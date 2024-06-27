import React, { Component } from 'react';

export class NewsSummarizer extends Component {
  state = {
    summary: '',
  };

  async fetchSummary() {
    if (this.state.summary) {
      // If summary is already set, no need to make another request
      return;
    }

    // Get the articleUrl from the browser's address bar
    const articleUrl = decodeURIComponent(window.location.pathname.split('/summarize/')[1]);

    if (!articleUrl) {
      console.error('Invalid URL');
      return;
    }

    const apiUrl = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(articleUrl)}`;

    const headers = {
      // 'X-RapidAPI-Key': 'b4d67ca1cdmsh16c42ae901885b2p1c9583jsn3d105ca76b4f',
      'X-RapidAPI-Key': '7d5e1d2c29mshecf2d85c1b15779p1c86a7jsnb0b88ac67ba5',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
    };

    try {
      const response = await fetch(apiUrl, { headers });
      const data = await response.json();
      this.setState({ summary: data.summary });
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    this.fetchSummary();
  }

  render() {
    return (
      <div>
        <h2>Article Summary</h2>
        <p>{this.state.summary}</p>
      </div>
    );
  }
}

export default NewsSummarizer;
