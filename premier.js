const teams =   [
                 'Arsenal'
                ,'Aston Villa'
                ,'Brentford'
                ,'Brighton & Hove Albion'
                ,'Burnley'
                ,'Chelsea'
                ,'Crystal Palace'
                ,'Everton'
                ,'Leeds United'
                ,'Leicester City'
                ,'Liverpool'
                ,'Manchester City'
                ,'Manchester United'
                ,'Newcastle United'
                ,'Norwich City'
                ,'Southampton'
                ,'Tottenham Hostspur'
                ,'Watford'
                ,'West Ham United'
                ,'Wolverhampton Wanderers'
                ]
const verbs =  [
                    'will'
                   ,'may'
                   ,'could'
                   ,'will not'
                   ,'may not'
                   ,'should not'
                   ]
const events =  [
                    'win the League!'
                   ,'get relegated!'
                   ,'qualify for Europe!'
                   ,'sack their manager.'
                   ,'survive relegation.'
                   ,'go into adminsitration.'
                   ,'be purchased by a new owner.'
                   ,'move to a new Stadium.'
                   ]
                      
let team1Index = Math.floor(Math.random() * teams.length);
let verb1Index = Math.floor(Math.random() * verbs.length);
let event1Index = Math.floor(Math.random() * events.length);

let team1 = teams[team1Index];
let verb1 = verbs[verb1Index];
let event1 = events[event1Index];

console.log(team1 + ' ' + verb1 + ' ' + event1);
