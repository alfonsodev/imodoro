'use strict'
import React from 'react'
// import SetIntervalMixin from 'app/mixins/set-interval-mixin'
import Timer from 'app/Timer'
import List from 'app/List'
import Input from 'app/Input'


React.render(<Input/>, document.getElementById('input'))
React.render(<Timer/>, document.getElementById('timer'))
React.render(<List/>, document.getElementById('list'))
