import React from "react";

export default class InfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevY: 0,
    };
  }

  componentDidMount() {
    this.updateObserverParam();
  }

  componentDidUpdate(prevProps) {
    if (!this.state.prevY || prevProps.endLoad !== this.props.endLoad) {
      this.updateObserverParam();
    }
  }

  updateObserverParam = () => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    this.observer = new IntersectionObserver(this.handleObserver, options);

    if (this.loadMoreRef) {
      this.observer.observe(this.loadMoreRef);
    }
  };

  handleObserver = (entities) => {
    const { y } = entities[0].boundingClientRect;
    const { prevY } = this.state;
    if (prevY >= y) {
      this.props.loadMore();
    }
    this.setState({ prevY: y });
  };

  render() {
    const { loadingComponent, children = [], endLoad = false } = this.props;

    return (
      <React.Fragment>
        {children}
        {!endLoad && (
          <div
            ref={(loadMoreRef) => {
              this.loadMoreRef = loadMoreRef;
            }}
          >
            {loadingComponent}
          </div>
        )}
      </React.Fragment>
    );
  }
}
