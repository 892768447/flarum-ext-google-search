import { extend } from "flarum/extend";
import app from "flarum/app";
import Page from "flarum/components/Page";
import ItemList from "flarum/utils/ItemList";
import listItems from "flarum/helpers/listItems";
import IndexPage from "flarum/components/IndexPage";
import Alert from "flarum/components/Alert";
import Button from "flarum/components/Button";
import LinkButton from "flarum/components/LinkButton";
import SelectDropdown from "flarum/components/SelectDropdown";
import GoogleSearchList from "./GoogleSearchList";

/**
 * The `IndexPage` component displays the index page, including the welcome
 * hero, the sidebar, and the discussion list.
 */
export default class GoogleSearchPage extends Page {
  init() {
    super.init();

    const params = this.params();
    this.bodyClass = "App--index";

    // If the user is coming from the discussion list, then they have either
    // just switched one of the parameters (filter, sort, search) or they
    // probably want to refresh the results. We will clear the discussion list
    // cache so that results are reloaded.
    if (app.previous instanceof GoogleSearchPage) {
      app.cache.googleSearchList = null;
    }

    if (app.cache.googleSearchList) {
      // Compare the requested parameters (sort, search query) to the ones that
      // are currently present in the cached discussion list. If they differ, we
      // will clear the cache and set up a new discussion list component with
      // the new parameters.
      Object.keys(params).some(key => {
        if (app.cache.googleSearchList.props.params[key] !== params[key]) {
          app.cache.googleSearchList = null;
          return true;
        }
      });
    }

    if (!app.cache.googleSearchList) {
      app.cache.googleSearchList = new GoogleSearchList({ params });
    }
    if (!app.session.user) {
      this.alertNotice();
    }
  }

  onunload() {
    // Save the scroll position so we can restore it when we return to the
    // result list.
    app.cache.scrollTop = $(window).scrollTop();
  }

  view() {
    return (
      <div className="IndexPage">
        {IndexPage.prototype.hero()}
        <div className="container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav">
              <ul>{listItems(this.sidebarItems().toArray())}</ul>
            </nav>
            <div className="IndexPage-results sideNavOffset">
              <div className="IndexPage-toolbar">
                <ul className="IndexPage-toolbar-view"></ul>
                <ul className="IndexPage-toolbar-action">
                  {listItems(this.actionItems().toArray())}
                </ul>
              </div>
              {app.cache.googleSearchList.render()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  config(isInitialized, context) {
    super.config(...arguments);

    if (isInitialized) return;

    extend(context, "onunload", () => $("#app").css("min-height", ""));

    app.setTitle("");
    app.setTitleCount(0);

    // Work out the difference between the height of this hero and that of the
    // previous hero. Maintain the same scroll position relative to the bottom
    // of the hero so that the sidebar doesn't jump around.
    const oldHeroHeight = app.cache.heroHeight;
    const heroHeight = (app.cache.heroHeight =
      this.$(".Hero").outerHeight() || 0);
    const scrollTop = app.cache.scrollTop;

    $("#app").css("min-height", $(window).height() + heroHeight);

    // Scroll to the remembered position. We do this after a short delay so that
    // it happens after the browser has done its own "back button" scrolling,
    // which isn't right. https://github.com/flarum/core/issues/835
    const scroll = () =>
      $(window).scrollTop(scrollTop - oldHeroHeight + heroHeight);
    scroll();
    setTimeout(scroll, 1);
  }

  alertNotice() {
    let alert;
    app.alerts.show(
      (alert = new Alert({
        type: "error",
        children: app.translator.trans(
          "irony-google-search.forum.page.notice_text"
        )
      }))
    );
    // 5秒后自动关闭
    setTimeout(function() {
      app.alerts.dismiss(alert);
    }, 3000);
  }

  /**
   * Build an item list for the sidebar of the index page. By default this is a
   * "New Discussion" button, and then a DropdownSelect component containing a
   * list of navigation items.
   *
   * @return {ItemList}
   */
  sidebarItems() {
    const items = IndexPage.prototype.sidebarItems();

    items.replace(
      "nav",
      SelectDropdown.component({
        children: this.navItems(this).toArray(),
        buttonClassName: "Button",
        className: "App-titleControl"
      })
    );

    return items;
  }

  /**
   * Build an item list for the navigation in the sidebar of the index page. By
   * default this is just the 'All Discussions' link.
   *
   * @return {ItemList}
   */
  navItems() {
    const items = IndexPage.prototype.navItems();
    const params = this.stickyParams();

    items.add(
      "irony-google-search",
      LinkButton.component({
        href: app.route("irony_google_search", params),
        children: app.translator.trans("irony-google-search.forum.page.nav"),
        icon: "fab fa-google"
      }),
      85
    );

    return items;
  }

  /**
   * Build an item list for the part of the toolbar which is about taking action
   * on the results. By default this is just a "mark all as read" button.
   *
   * @return {ItemList}
   */
  actionItems() {
    const items = new ItemList();

    // 刷新按钮
    items.add(
      "refresh",
      Button.component({
        title: app.translator.trans("core.forum.index.refresh_tooltip"),
        icon: "fas fa-sync",
        className: "Button Button--icon",
        onclick: () => {
          if (app.session.user) {
            app.cache.googleSearchList.refresh();
          } else {
            this.alertNotice();
          }
        }
      })
    );

    return items;
  }

  /**
   * Return the current search query, if any. This is implemented to activate
   * the search box in the header.
   *
   * @see Search
   * @return {String}
   */
  searching() {
    return this.params();
  }

  /**
   * Redirect to the index page without a search filter. This is called when the
   * 'x' is clicked in the search box in the header.
   *
   * @see Search
   */
  clearSearch() {
    m.route(app.route(this.props.routeName, {}));
  }

  /**
   * Get URL parameters that stick between filter changes.
   *
   * @return {Object}
   */
  stickyParams() {
    return m.route.param();
  }

  /**
   * Get parameters to pass to the GoogleSearchList component.
   *
   * @return {Object}
   */
  params() {
    return m.route.param();
  }
}
