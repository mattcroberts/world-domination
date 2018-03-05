import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.config.truncateThreshold = 0;
chai.use(chaiEnzyme());
configure({ adapter: new Adapter() });