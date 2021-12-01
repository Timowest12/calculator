import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Header from '../components/Header';
import Quote from '../components/Quote';


describe('test screenshots', () => {
  test('calculator screenshot', () => {
    const calculator = TestRenderer.create(<Calculator />).toJSON();

    expect(calculator).toMatchSnapshot();
  });
  test('quote screenshot', () => {
    const quote = TestRenderer.create(<Router>
        <Quote />
      </Router>,).toJSON();

    expect(quote).toMatchSnapshot();
  });
  test('header screenshot', () => {
    const header = TestRenderer.create(
        <Router>
        <Header />
      </Router>,
      ).toJSON();

    expect(header).toMatchSnapshot();
  });
});