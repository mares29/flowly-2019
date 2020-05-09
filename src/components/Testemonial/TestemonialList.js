import PropTypes from "prop-types"
import React from "react"
import Testemonial from "./Testemonial"

const TestemonialList = ({ testemonials }) => {
  const allTestemonials = testemonials.map((testemonial, i) => {
    const t = testemonial.node
    return (
      <Testemonial
        key={t.cockpitId}
        text={t.text}
        name={t.name}
        position={t.position}
        photo={t.cover.asset.fixed}
      />
    )
  })
  return <React.Fragment>{allTestemonials}</React.Fragment>
}

TestemonialList.propTypes = {
  testemonials: PropTypes.array.isRequired,
}

export default TestemonialList
