import { DtoProject } from '../common/interfaces/dto_project';
import { ProjectFiles } from '../common/interfaces/dto_project_data';
import * as _ from 'lodash';

export interface ProjectState {

    projects: _.Dictionary<DtoProject>;

    activeProject: string;

    projectFiles: ProjectFiles;
}

export const projectDefaultValue: ProjectState = {
    projects: {},
    activeProject: '',
    projectFiles: {
        globalJS: {},
        globalData: {},
        projectJS: {},
        projectData: {}
    }
};