import {extend} from 'flarum/extend';
import app from 'flarum/app';
import LinkButton from 'flarum/components/LinkButton';
import IndexPage from 'flarum/components/IndexPage';
import GoogleSearchPage from './components/GoogleSearchPage';

// Allow other extensions to extend the page
export {GoogleSearchPage};

app.initializers.add('irony-google-search', app => {
    app.routes.irony_google_search = {path: '/google', component: GoogleSearchPage.component()};

    extend(IndexPage.prototype, 'navItems', items => {
        items.add('irony-google-search',
            LinkButton.component({
                href: app.route('irony_google_search'),
                children: app.translator.trans('irony-google-search.forum.page.nav'),
                icon: 'fab fa-google'
            }),
            85
        );
    });
});