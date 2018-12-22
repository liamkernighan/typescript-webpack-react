import * as React from "react";
import { FormControl } from "react-bootstrap";

import { observer } from "mobx-react";

@observer
export class App extends React.Component<{}> {

    @observable public one: number;

    public render(): JSX.Element {

        return(
        <div className="row">
            HELLO
        </div>
        );
    }
}
