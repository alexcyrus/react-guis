import React, { Component } from 'react';
import $ from 'jquery';
import Counter from './components/Counter';
import TemperatureConverter from './components/TemperatureConverter';
import FlightBooker from './components/FlightBooker';
import Timer from './components/Timer';
import CRUD from './components/CRUD';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="et-header">
          <div className="et-header__left">
            <a href="" className="et-header__logo">Home</a>
          </div>
        </header>

        <section className="et-hero-tabs">
          <h1>React GUIs</h1>
          <div className="et-hero-tabs-container">
            <a className="et-hero-tab" href="#tab-counter">Counter</a>
            <a className="et-hero-tab" href="#tab-temperature-converter">Temperature Converter</a>
            <a className="et-hero-tab" href="#tab-flight-booker">Flight Booker</a>
            <a className="et-hero-tab" href="#tab-timer">Timer</a>
            <a className="et-hero-tab" href="#tab-crud">CRUD</a>
            <span className="et-hero-tab-slider"></span>
          </div>
        </section>

        <main className="et-main">
          <section className="et-slide" id="tab-counter">
            <h1>Counter</h1>
            <br />
            <Counter />
          </section>
          <section className="et-slide" id="tab-temperature-converter">
            <h1>Temperature Converter</h1>
            <br />
            <TemperatureConverter />
          </section>
          <section className="et-slide" id="tab-flight-booker">
            <h1>Flight Booker</h1>
            <br />
            <FlightBooker />
          </section>
          <section className="et-slide" id="tab-timer">
            <h1>Timer</h1>
            <br />
            <Timer />
          </section>
          <section className="et-slide" id="tab-crud">
            <h1>CRUD</h1>
            <br />
            <CRUD />
          </section>
        </main>
      </div>
    );
  }
}

class StickyNavigation {
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		this.lastScroll = 0;
		let self = this;
		$('.et-hero-tab').on('click', function() { 
			self.onTabClick($(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkHeaderPosition();
    this.findCurrentTabSelector();
		this.lastScroll = $(window).scrollTop();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkHeaderPosition() {
		const headerHeight = 75;
		if($(window).scrollTop() > headerHeight) {
			$('.et-header').addClass('et-header--scrolled');
		} else {
			$('.et-header').removeClass('et-header--scrolled');
		}
		let offset = ($('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight) - headerHeight;
		if($(window).scrollTop() > this.lastScroll && $(window).scrollTop() > offset) {
			$('.et-header').addClass('et-header--move-up');
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top-first');
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top-second');
		} 
		else if($(window).scrollTop() < this.lastScroll && $(window).scrollTop() > offset) {
			$('.et-header').removeClass('et-header--move-up');
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top-second');
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top-first');
		}
		else {
			$('.et-header').removeClass('et-header--move-up');
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top-first');
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top-second');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}

new StickyNavigation();

export default App;
