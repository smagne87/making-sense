/* eslint-disable class-methods-use-this */
import initialState from './initialState';

class StateLoader {
  loadState() {
    try {
      const serializedState = localStorage.getItem('code.challenge.com.state');

      if (serializedState === null) {
        return this.initializeState();
      }

      return JSON.parse(serializedState);
    } catch (err) {
      return this.initializeState();
    }
  }

  saveState(state) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('code.challenge.com.state', serializedState);
  }

  initializeState() {
    return initialState;
  }
}

export default StateLoader;
