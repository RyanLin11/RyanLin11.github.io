import './App.css';
import NavigateBar from './components/NavigateBar.js';
import GridDisplay from './components/GridDisplay';
import BlockItem from './components/BlockItem';
import Topic from './components/Topic';
import Footer from './components/Footer';
import {Container, Accordion} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavigateBar />
      <Topic title='About Me'>
        <Container>
          <p>Hi! I'm Ryan Lin, a first-year Computer Science student at the University of Waterloo. I like competitive programming, web development, and attending hackathons! Feel free to reach out to me, I'm always excited to get to know new people.</p>
        </Container>
      </Topic>
      <Topic title='Portfolio'>
        <GridDisplay>
          <BlockItem name='Weather App' description='Checks Weather' imageUrl='https://camo.githubusercontent.com/84791db34fc6df236bf3c32f5e4936e4cf41ac404cb170df0600da6cd1fa51f1/68747470733a2f2f692e706f7374696d672e63632f584e6b62706248472f776561746865726170702e706e67' link='https://github.com/RyanLin11/Weather'/>
          <BlockItem name='Student Housing' description='Finds Housing' imageUrl='https://camo.githubusercontent.com/287b35da363f08bb2e7e61343d44ae787a4c398d5bcfabd3cb6f8d423c15ea6d/68747470733a2f2f692e706f7374696d672e63632f6e633074774356702f73637265656e73686f742e706e67' link='https://github.com/RyanLin11/Student-Housing'/>
          <BlockItem name='Restaurant Sim' description='Play Restaurant Game' imageUrl='https://camo.githubusercontent.com/bb0d9c0243a54c2a7dedf9e5d6de4c3f6c6992feb725a06e3849bf4f854ee7b6/68747470733a2f2f692e706f7374696d672e63632f4d4b43626272484e2f72657374617572616e742e706e67' link='https://github.com/RyanLin11/Restaurant-Simulation'/>
          <BlockItem name='Image Editor' description='Edits Images' imageUrl='https://camo.githubusercontent.com/35b998c9c754127141cb5c8403e73c26827a70f7fd2a90674b025ffea86a09af/68747470733a2f2f692e706f7374696d672e63632f713756766e644b502f696d616765656469746f722e706e67' link='https://github.com/RyanLin11/Image-Editor'/>
          <BlockItem name='Pathfinder' description='Helps students see admissions info' imageUrl='https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/491/381/datas/gallery.jpg' link='https://devpost.com/software/pathfinder-nt23p5'/>
          <BlockItem name='Workout Buddy' description='ML Workout App' imageUrl='https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/663/734/datas/gallery.jpg' link='https://devpost.com/software/workout-buddy-9twy2j'/>
        </GridDisplay>
      </Topic>
      <Topic title='Awards'>
        <Accordion style={{'margin-right':'15%', 'margin-left':'15%'}}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>🏆 Top 20 HRM at DECA ICDC 2019</Accordion.Header>
            <Accordion.Body>
              Received Top 20 award in Human Resources Category at the 2019 International Career Development Conference in Orlando, Florida.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>🏆 CCC Certificate of Distinction</Accordion.Header>
            <Accordion.Body>
              Placed top 10% in the Canadian Computing Competition (Senior Division).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>🏆 #1 at Rotman Commerce Case Competition</Accordion.Header>
            <Accordion.Body>
              First place team at the Boardroom Case Competition hosted by Rotman Commerce in 2020.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Topic>
      <Footer />
    </div>
  );
}

export default App;
