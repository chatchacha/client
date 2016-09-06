'use strict';

// wait for the document to load
var name;

var smileys = [
    [/[:=]-?@/g, 'angry_smile'],
    [/[:=]-?[sS]/g, 'confused_smile'],
    [/[:=]'\(/g, 'cry_smile'],
    [/8-?\)/g, 'shades_smile'],
    [/[:=]-?[dD]/g, 'teeth_smile'],
    [/[:=]-?\(/g, 'sad_smile'],
    [/[:=]-?\$/g, 'red_smile'],
    [/[:=]-?[oO]/g, 'omg_smile'],
    [/[:=]-?\)/g, 'regular_smile'],
    [/[:=]-?\|/g, 'what_smile'],
    [/[:=]-?[pP]/g, 'tongue_smile'],
    [/;-?\)/g, 'wink_smile'],
    [/\([aA]\)/g, 'angel_smile'],
    [/\(6\)/g, 'devil_smile'],
    [/[:=]-?#/g, '47_47'],
    [/8o#/g, '48_48'],
    [/8-?\|/g, '49_49'],
    [/\^o?\)/g, '50_50'],
    [/[:=]-?\*/g, '51_51'],
    [/\+[-o]?\(/g, '52_52'],
    [/:\^\)/g, '71_71'],
    [/\*-?\)/g, '72_72'],
    [/\^[:=]-?\)/g, '74_74'],
    [/8o\)/g, '75_75'],
    [/\|-?\)/g, '77_77'],
    [/\([cC]\)/g, 'coffee'],
    [/\([yY]\)/g, 'thumbs_up'],
    [/\([nN]\)/g, 'thumbs_down'],
    [/\([bB]\)/g, 'beer_mug'],
    [/\([dD]\)/g, 'martini'],
    [/\([xX]\)/g, 'girl'],
    [/\([zZ]\)/g, 'guy'],
    [/\(\{\)/g, 'guy_hug'],
    [/\(\}\)/g, 'girl_hug'],
    [/[:=]-?\[/g, 'bat'],
    [/\(\^\)/g, 'cake'],
    [/\([lL]\)/g, 'heart'],
    [/\([uU]\)/g, 'broken_heart'],
    [/\([kK]\)/g, 'kiss'],
    [/\([gG]\)/g, 'present'],
    [/\([fF]\)/g, 'rose'],
    [/\([wW]\)/g, 'wilted_rose'],
    [/\([pP]\)/g, 'camera'],
    [/\(~\)/g, 'film'],
    [/\(@\)/g, 'cat'],
    [/\(&\)/g, 'dog'],
    [/\(tT\)/g, 'phone'],
    [/\(iI\)/g, 'lightbulb'],
    [/\(8\)/g, 'note'],
    [/\(S\)/g, 'moon'],
    [/\(\*\)/g, 'star'],
    [/\(eE\)/g, 'envelope'],
    [/\(oO\)/g, 'clock'],
    [/\(mM\)/g, 'messenger'],
    [/\(sn\)/g, '53_53'],
    [/\(bah\)/g, '70_70'],
    [/\(pl\)/g, '55_55'],
    [/\(ll\)/g, '56_56'],
    [/\(pi\)/g, '57_57'],
    [/\(so\)/g, '58_58'],
    [/\(au\)/g, '59_59'],
    [/\(ap\)/g, '60_60'],
    [/\(um\)/g, '61_61'],
    [/\(ip\)/g, '62_62'],
    [/\(co\)/g, '63_63'],
    [/\(mp\)/g, '64_64'],
    [/\(st\)/g, '66_66'],
    [/\(li\)/g, '73_73'],
    [/\(mo\)/g, '69_69'],
];

var down = true;

window.addEventListener('load', function () {
  name = prompt('Comment tu t\'appelles ?') || 'unknown';

  function onTextChange(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
        event.preventDefault();
        socket.emit('message', name, this.value);
        this.value = '';
        return false;
    }
  }

  document.getElementById('input').addEventListener('keydown', onTextChange);

  document.getElementById('container').addEventListener('scroll', function () {
    down = this.offsetHeight + this.scrollTop >= this.scrollHeight;
  });

  var socket = window.socket = io('http://chatchacha.fr:8181');
  socket.on('message', function(from, msg) {
    appendMessage(from, msg);
  });
});

function appendMessage(from, msg) {
    var container = document.getElementById('container');
    container.appendChild(buildMessage(from, msg));
    if (down === true) {
        container.scrollTop = container.scrollHeight;
    }
}

function buildMessage(from, msg) {
    var article = document.createElement('article');
    article.setAttribute('class', 'message');

    var picture = document.createElement('picture');
    picture.setAttribute('class', 'message-thumbnail');

    var img = document.createElement('img');
    img.setAttribute('src', 'http://placehold.it/50x50');
    picture.appendChild(img);
    article.appendChild(picture);

    var h1 = document.createElement('h1');
    h1.setAttribute('class', 'message-name');
    h1.appendChild(document.createTextNode(from + ' :'));
    article.appendChild(h1);

    var p = document.createElement('p');
    p.setAttribute('class', 'message-content');
    p.innerHTML = parseText(msg.replace(/\n/g, '<br/>'));
    article.appendChild(p);

    /*var time = document.createElement('time');
    time.setAttribute('class', 'message-time');
    time.appendChild(document.createTextNode(parseDate(new Date())));
    article.appendChild(time);*/

    return article;
}

function parseDate(date) {
    var day = date.getDate(),
        month = date.getMonth() + 1,
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    return (day < 10 ? '0' : '') + day + '/'
        + (month < 10 ? '0' : '') + month + '/'
        + date.getFullYear() + ' '
        + (hours < 10 ? '0' : '') + hours + ':'
        + (minutes < 10 ? '0' : '') + minutes + ':'
        + (seconds < 10 ? '0' : '') + seconds;
}

function parseText(str) {
    for (var i = 0; i < smileys.length; i += 1) {
        str = str.replace(smileys[i][0], '<img src="img/smileys/' + smileys[i][1] + '.gif" />');
    }

    return str;
}
