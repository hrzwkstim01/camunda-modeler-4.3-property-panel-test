import CamundaPropertiesProvider from 'bpmn-js-properties-panel/lib/provider/camunda/CamundaPropertiesProvider';

export default class PropertiesProvider extends CamundaPropertiesProvider {
  constructor(config, injector, translate) {
    super(...CamundaPropertiesProvider.$inject.map(dependency => injector.get(dependency)));
    
    const getTabs = this.getTabs;

    this.getTabs = element => {
      console.log('getting Tabs');
      const tabs = getTabs(element);
      return tabs;
    };
  }
}

PropertiesProvider.$inject = [
  'config.propertiesProvider',
  'injector',
  'translate'
];
