import { Card } from './components/ui/Card'
import { Header } from './components/ui/Header'
import { Modal } from './components/ui/Modal'
import { Select } from './components/ui/Select'
import { TabSwitcher } from './components/ui/TabSwitcher'
import { Table } from './components/ui/Table/Table'
import { Router } from './router'
export const App = () => {
  return <Router />
  // <div>
  //   <Header />
  //   <div style={{ margin: '70px' }}>
  //     <TabSwitcher />
  //   </div>
  //   <div>
  //     <Select selectName={'tutle'} selectedItems={['234234', '223434', '2', 'aqweqweq']} />
  //   </div>
  //   <Table />
  //   <div style={{ marginLeft: '50px' }}>
  //     <Modal variant={'Card'} />
  //   </div>
  //   <Card
  //     variant="Answer"
  //     answer={'Planets count is eight'}
  //     deckName={'Planets'}
  //     question={'how much planets exists'}
  //   />
  // </div>
}
