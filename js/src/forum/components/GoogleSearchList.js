import app from "flarum/app";
import Component from "flarum/Component";
import Button from "flarum/components/Button";
import LoadingIndicator from "flarum/components/LoadingIndicator";
import Placeholder from "flarum/components/Placeholder";
import GoogleSearchListItem from "./GoogleSearchListItem";

/**
 * The `GoogleSearchList` component displays a list of search result.
 *
 * ### Props
 *
 * - `params` A map of parameters used to construct a refined parameter object
 *   to send along in the API request to get google search results.
 */
export default class GoogleSearchList extends Component {
  init() {
    /**
     * Whether or not google search results are loading.
     *
     * @type {Boolean}
     */
    this.loading = true;

    /**
     * Whether or not there are more results that can be loaded.
     *
     * @type {Boolean}
     */
    this.moreResults = false;

    /**
     * the google search list.
     *
     * @type {Array}
     */
    this.googleresults = [];

    this.refresh();
  }

  view() {
    const params = this.props.params;
    let loading;

    if (this.loading) {
      loading = LoadingIndicator.component();
    } else if (this.moreResults) {
      loading = Button.component({
        children: app.translator.trans(
          "core.forum.discussion_list.load_more_button"
        ),
        className: "Button",
        onclick: this.loadMore.bind(this)
      });
    }

    if (this.googleresults.length === 0 && !this.loading) {
      const text = app.translator.trans(
        "irony-google-search.forum.page.empty_text"
      );
      return (
        <div className="DiscussionList">{Placeholder.component({ text })}</div>
      );
    }

    return (
      <div
        className={
          "DiscussionList" +
          (this.props.params.q ? " DiscussionList--searchResults" : "")
        }
      >
        <ul className="DiscussionList-discussions">
          {this.googleresults.map(info => {
            return <li>{GoogleSearchListItem.component({ info, params })}</li>;
          })}
        </ul>
        <div className="DiscussionList-loadMore">{loading}</div>
      </div>
    );
  }

  /**
   * Get the parameters that should be passed in the API request to get
   * google search results.
   *
   * @return {Object}
   * @api
   */
  requestParams() {
    return this.props.params;
  }

  /**
   * Clear and reload the google search list.
   *
   * @public
   */
  refresh(clear = true) {
    if (clear) {
      this.loading = true;
      this.googleresults = [];
    }

    return this.loadResults().then(
      results => {
        this.googleresults = [];
        this.parseResults(results);
      },
      () => {
        this.loading = false;
        m.redraw();
      }
    );
  }

  /**
   * Load a new page of google search results.
   * 请求api获取数据
   *
   * @param {Integer} offset The index to start the page at.
   * @return {Promise}
   */
  loadResults(offset) {
    const preloadedLists = app.preloadedApiDocument();

    if (preloadedLists) {
      return m.deferred().resolve(preloadedLists).promise;
    }

    return app
      .request({
        method: "GET",
        url: app.forum.attribute("apiUrl") + "/google/search",
        data: this.requestParams()
      })
      .then(function(data) {
        return data;
      });

    //return app.store.find("google/search", this.requestParams());
  }

  /**
   * Load the next page of google search results.
   *
   * @public
   */
  loadMore() {
    this.loading = true;

    this.loadResults(this.googleresults.length).then(
      this.parseResults.bind(this)
    );
  }

  /**
   * Parse results and append them to the google search list.
   *
   * @param {Array} results
   * @return {Array}
   */
  parseResults(results) {
    [].push.apply(this.googleresults, results);

    this.loading = false;
    this.moreResults = false;

    m.lazyRedraw();

    return results;
  }

  /**
   * Remove a google search from the list if it is present.
   *
   * @param {Array} list
   * @public
   */
  removeList(list) {
    const index = this.googleresults.indexOf(list);

    if (index !== -1) {
      this.googleresults.splice(index, 1);
    }
  }

  /**
   * Add a google search to the top of the list.
   *
   * @param {Array} list
   * @public
   */
  addList(list) {
    this.googleresults.unshift(list);
  }
}
