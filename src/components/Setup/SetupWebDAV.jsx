import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import { handleChange, OptionalField, RequiredField, validateRequiredFields } from '../../forms';
import { WithControls } from './WithControls';

export class SetupWebDAV extends Component {
    constructor(props) {
        super();

        this.state = {
            ...props.initial
        };
        this.handleChange = handleChange.bind(this);
    }

    validate() {
        return validateRequiredFields(this, ["url"])
    }

    render() {
        return <WithControls validate={this.validate}>
            <Row>
                {RequiredField(this, "WebDAV Server URL", "url", { autoFocus: true, placeholder: "http[s]://server:port/path" })}
            </Row>
            <Row>
                {OptionalField(this, "Username", "username", { placeholder: "enter username" })}
                {OptionalField(this, "Password", "password", { placeholder: "enter password", type: "password" })}
            </Row>
        </WithControls>;
    }
}
