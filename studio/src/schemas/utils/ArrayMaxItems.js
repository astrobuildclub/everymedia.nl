// ArrayWithMaxItems.js

import { ArrayOfPrimitivesFunctions } from 'sanity'

export function ArrayWithMaxItems(props) {
  return props.renderDefault({ ...props, arrayFunctions })
}

function arrayFunctions(props) {
  const allRules = props?.schemaType?.validation?.flatMap(x => x._rules) || []
  const maxLength = allRules.find(r => r.flag === 'max' || r.flag === 'length')?.constraint

  const total = props?.value?.length || 0

  if (!isNaN(maxLength) && total >= maxLength) return null

  return <ArrayOfPrimitivesFunctions {...props} />
}