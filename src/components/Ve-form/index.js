import FbTable from './Table'
import FbFrom from './Search'
const VeUi = {}
const COMPONENT= [ FbTable, FbFrom ]
VeUi.install = function(Vue, options) {
    if (options && options.components) {
        const components = options.components
        components.forEach(components => {
          COMPONENT.forEach(COMPONENT => {
            if (COMPONENT.name === components) {
              Vue.component(COMPONENT.name, COMPONENT)
            }
          })
        })
      } else {
        COMPONENT.forEach(ele => {
          Vue.component(ele.name, ele)
        })
    }
}
export default VeUi