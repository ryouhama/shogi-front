import styled from "styled-components"

export const AppLayout: React.FC = (props) => {
  const { children } = props
  return (
    <AppWrapper>
      {children}
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`