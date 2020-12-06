import Generator from 'yeoman-generator';
import simpleGit, {SimpleGit} from 'simple-git';
const git: SimpleGit = simpleGit();

module.exports = class extends Generator {
  initializing() {
    console.log('method init ran');
  }
};
