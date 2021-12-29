import React from 'react'

import _ from 'lodash'

import {
  StateType,
  initialState,
} from './Types'
import Context from './Context'


class Provider extends React.Component<{}, StateType> {

  state: StateType = initialState

  initializeCallBacks: Function[] = []

  componentDidMount = () => {
    this.setState({ ready: true })
    this.callInitializeCallbacks()
  }

  registerInitializeCallback = (fn: Function) => {
    this.initializeCallBacks.push(fn)
    fn()
  }
  
  callInitializeCallbacks = () =>
    setTimeout(() =>
      this.initializeCallBacks
        .forEach((callback: Function) =>
          callback())
      , 100
    )

  stateAndSetters = () => {
    const nonState = {
      setState: (obj: any) => this.setState(obj),
      setLocale: (_locale: string) =>
        this.setState({
          locale: _locale
        }),
      toggleLocale: () =>
        this.setState({
          locale: this.state.locale === "ru" ? "en" : "ru"
        }),  
      registerInitializeCallback: this.registerInitializeCallback,
    }

    return ({
        ...(this.state.ready ? this.state : initialState),
        ...nonState
      })
  }

  render = () =>
    <Context.Provider value={this.stateAndSetters()}>
      {this.props.children}
    </Context.Provider>
}


export default Provider