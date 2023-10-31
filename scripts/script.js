$(document).ready(function() {

  const dataContainer = $('#data-container');
  const button1 = $('#button1');
  const button2 = $('#button2');
  const button3 = $('#button3');
  const button4 = $('#button4');
  const button5 = $('#button5');
  const button6 = $('#button6');
  const button7 = $('#button7');
  const button8 = $('#button8');
  const button9 = $('#button9');
  const button10 = $('#button10');

let data = [
    {
      title: 'Tottenham',
      city: 'London',
      placeInTable: 1,
      wins: 8,
      loses: 0,
      draws: 2,
    },
    {
      title: 'Arsenal',
      city: 'London',
      placeInTable: 2,
      wins: 7,
      loses: 0,
      draws: 3,
    },
    {
      title: 'Man City',
      city: 'Manchester',
      placeInTable: 3,
      wins: 8,
      loses: 2,
      draws: 0,
    },
    {
      title: 'Liverpool',
      city: 'Liverpool',
      placeInTable: 4,
      wins: 7,
      loses: 1,
      draws: 2,
    }
  ];

function renderData() {
  dataContainer.empty();
  data.forEach(item => {
    const listItem = $('<p>').text(JSON.stringify(item));
    dataContainer.append(listItem);
  });
}

function shuffleData() {
  data = _.shuffle(data);
  renderData();
}

function sortData() {
  data = _.orderBy(data, 'placeInTable');
  renderData();
}

function filterData() {
  data = _.filter(data, item => item.wins > 7);
  renderData();
}

function takeData() {
  data = _.take(data, 2);
  renderData();
}

function colorData() {
  _.forEach(data, function(item) {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $("#data-container p:contains('" + item.title + "')").css("color", randomColor);
  });
}

function mapData() {
  data = _.map(data, item => ({ title: item.title, placeInTable: item.placeInTable }));
  renderData();
}

function sortReversed() {
  data = _.orderBy(data, 'placeInTable').reverse();
  renderData();
}

function top3TeamsByWins() {
  const top3 = _.orderBy(data, 'wins', 'desc').slice(0, 3);
  alert(`Top 3 Teams by Wins:\n${top3.map(item => item.title).join(', ')}`);
}

function teamsWithMoreDrawsThanLosses() {
  const filteredTeams = _.filter(data, item => item.draws > item.loses);
  alert(`Teams with More Draws than Losses:\n${filteredTeams.map(item => item.title).join(', ')}`);
}

function sumWinsAndLosses() {
  const totalWins = _.sumBy(data, 'wins');
  const totalLosses = _.sumBy(data, 'loses');
  alert(`Total Wins: ${totalWins}, Total Losses: ${totalLosses}`);
}


button1.on('click', shuffleData);
button2.on('click', sortData);
button3.on('click', filterData);
button4.on('click', takeData);
button5.on('click', colorData);
button6.on('click', mapData);
button7.on('click', sortReversed);
button8.on('click', top3TeamsByWins);
button9.on('click', teamsWithMoreDrawsThanLosses);
button10.on('click', sumWinsAndLosses);

renderData();

});

