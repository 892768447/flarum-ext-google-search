import Component from "flarum/Component";

export default class GoogleSearchListItem extends Component {
  view() {
    const info = this.props.info;
    return (
      <div className="DiscussionListItem">
        <a
          href={info.url}
          className="GoogleSearchListItem-main"
          target="_blank"
        >
          <h3 className="GoogleSearchListItem-title">{info.title}</h3>
          <ul className="GoogleSearchListItem-info">
            <li className="item-excerpt">
              <span>{info.content}</span>
            </li>
          </ul>
        </a>
      </div>
    );
  }
}
