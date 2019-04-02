import PropTypes from "prop-types"
import React from "react"
import Testemonial from "./Testemonial"

const TestemonialList = ({ testemonials }) => {
  const allTestemonials = testemonials.map((testemonial, i) => {
    const t = testemonial.node
    return (
      <Testemonial
        key={t.cockpitId}
        text={t.text.value}
        name={t.name.value}
        position={t.position.value}
        photo={t.photo.value}
      />
    )
  })
  return <React.Fragment>{allTestemonials}</React.Fragment>
}

TestemonialList.propTypes = {
  testemonials: PropTypes.array.isRequired,
}

export default TestemonialList
