import * as React from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { AppState } from '../AppState';
import { ConfigTarget } from '../../api/settings';
import { SectionLanguage } from './sectionLangauge';
import { SectionFiletypes } from './sectionFiletypes';

export class PanelConfig extends React.Component<{appState: AppState, target: ConfigTarget}, {}> {
    render() {
        const appState = this.props.appState;
        const target = this.props.target;
        const config = appState.settings.configs[target];
        if (!config) {
            return <div></div>
        }
        return (
            <div>
                <SectionLanguage appState={appState} target={target}></SectionLanguage>
                <SectionFiletypes appState={appState} target={target}></SectionFiletypes>
            </div>
        );
     }
}