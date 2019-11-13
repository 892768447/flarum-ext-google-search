import { extend } from "flarum/extend";
import app from "flarum/app";
import DiscussionsSearchSource from "flarum/components/DiscussionsSearchSource";
import LinkButton from "flarum/components/LinkButton";
import IndexPage from "flarum/components/IndexPage";
import GoogleSearchPage from "./components/GoogleSearchPage";

// Allow other extensions to extend the page
export { GoogleSearchPage };

app.initializers.add("irony-google-search", app => {
  // 扩展路由到指定页面
  app.routes.irony_google_search = {
    path: "/google",
    component: GoogleSearchPage.component()
  };

  // 增加搜索框扩展显示
  extend(DiscussionsSearchSource.prototype, "view", function(view, query) {
    if (!view) {
      return;
    }

    query = query.toLowerCase();

    view.splice(
      100, // 尽量排在最后
      0,
      <li className="Dropdown-header">
        {app.translator.trans(
          "irony-google-search.forum.search.search_heading"
        )}
      </li>,
      <li>
        {LinkButton.component({
          icon: "fas fa-search",
          children: app.translator.trans(
            "irony-google-search.forum.search.all_search_button",
            { query }
          ),
          href: app.route("irony_google_search", { q: query })
        })}
      </li>
    );
  });

  // 增加左侧导航显示
  extend(IndexPage.prototype, "navItems", items => {
    items.add(
      "irony-google-search",
      LinkButton.component({
        href: app.route("irony_google_search"),
        children: app.translator.trans("irony-google-search.forum.page.nav"),
        icon: "fab fa-google"
      }),
      85
    );
  });
});
