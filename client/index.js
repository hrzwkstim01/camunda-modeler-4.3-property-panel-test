import {
  registerBpmnJSPlugin
} from 'camunda-modeler-plugin-helpers';

import ExampleExtensionService from './bpmn-js-extension';

registerBpmnJSPlugin(ExampleExtensionService);
