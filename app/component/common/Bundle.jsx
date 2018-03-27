/*
 * @Author: Tmac-1 
 * @Date: 2018-03-27 10:32:57 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-27 12:03:09
 */


import React, { Component } from 'react'

class Bundle extends Component {
    constructor(props){
        super(props)
        this.state={
            mod:null
        }
    }
    
    // state = {
    //     // short for "module" but that's a keyword in js, so "mod"
    //     mod: null
    // }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        })
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null
    }
}

const BundleFun = (Component,props) =>
        <Bundle load={Component}>
            {(Component)=><Component {...props}/>}
        </Bundle>

export  {
  Bundle , BundleFun 
}

