import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const PLAYER_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlayTime, 1000));

function onPlayTime(data) {
  const currentTime = data.seconds;

  localStorage.setItem(PLAYER_KEY, currentTime);
}

player.setCurrentTime(localStorage.getItem(PLAYER_KEY) || 0);
