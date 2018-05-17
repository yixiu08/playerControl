import './actDataView.css';
class act {
  constructor(node) {
    this.node = node;
    this.name = 'ActDataView';
    this._view = null;
    this._viewItems = null;
  }
  render() {
    this._view = document.createElement('div');
    this._view.className = 'act-data';
    this._view.innerHTML = ` <span></span>
    <p class="act-title">飞屋环游记英文版（1080P高清爱奇艺独家播放）</p>
    <i class="act-line"></i>
    <div class="act-time">
      <p>总时长：</p>
      <p class="act-duration">00:56:18</p>
      <i>
        <i class="act-playtime"></i>
      </i>
    </div>`;
    this.node.appendChild(this._view);

    this._viewItems = {
      title: document.getElementsByClassName('act-title')[0],
      duration: document.getElementsByClassName('act-duration')[0],
      playtime: document.getElementsByClassName('act-playtime')[0],
      line: document.getElementsByClassName('act-line')[0],
      time: document.getElementsByClassName('act-time')[0]
    }
  }
  setData(obj) {
    this._viewItems.title.innerText = (obj && obj.videoTitle) || '爱奇艺小剧场';
    this._viewItems.time.style.display = this._viewItems.line.style.display = (obj && obj.videoDuration && obj.videoDuration > 0) ? 'block' : 'none';
    this._viewItems.duration.innerText = this.sec_to_time(obj.videoDuration);
    this._viewItems.playtime.style.width = Math.floor(118 * obj.videoPlayTime / obj.videoDuration) + 'px';
  }

  /**
   * 时间秒数格式化 s(S)
   */
  sec_to_time(s) {
    let t;
    if (s > -1) {
      let hour = Math.floor(s / 3600);
      let min = Math.floor(s / 60) % 60;
      let sec = s % 60;
      if (hour < 10) {
        t = '0' + hour + ":";
      } else {
        t = hour + ":";
      }

      if (min < 10) {
        t += "0";
      }
      t += min + ":";
      if (sec < 10) {
        t += "0";
      }
      t += sec;
    }
    return t;
  }

  set visible(bool) {
    this._view.style.display = bool ? 'block' : 'none';
  }
}

export default act;