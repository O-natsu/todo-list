import React from 'react';

export class InputForm extends React.Component {
    constructor(props) {
        // 初期化
        super(props);

        this.state = {
            value: '',
            message: ''
        };

        // bind(this)で固定
        this.onInputHandler = this.onInputHandler.bind(this);
        this.onSendHandler = this.onSendHandler.bind(this);
    }

    // 入力したとき
    onInputHandler ({ target: { value } }) {
        // setStateでvalueの状態を変える
        this.setState({
            value
        });
    }

    // 送信ボタンを押したとき
    onSendHandler() {
        // 押したら初期化
        const val = this.state.value;
        // message = value
        this.setState({
            value: '',
            message: val
        });
    }

    // ロードされたときの状態
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.onInputHandler} />
                <input type="button" onClick={this.onSendHandler} value="送信" />
                <li>{this.state.message}</li>
            </div>
        );
    }
}
