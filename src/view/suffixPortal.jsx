import {CodeSandboxOutlined} from "@ant-design/icons"
import {useState} from "react"
import {Modal, Rate, Table} from "antd";

export default function SuffixPortal({portal}) {
    const [showAllRisk, setShowAllRisk] = useState(false)

    return <>
        <button className={"suffix-btn"} onClick={() => setShowAllRisk(true)}>
            <CodeSandboxOutlined className={"mr10"}/>
            全部风险点
        </button>
        <ShowAllRiskModal
            data={portal.events?.flatMap(e => e.risk_list)}
            visible={showAllRisk}
            onCancel={() => setShowAllRisk(false)}
        />
    </>
}


const ShowAllRiskModal = ({data, visible, onCancel}) => {

    const columns = [{
        title: '标题', dataIndex: 'title', key: 'title',
    }, {
        title: '后果', dataIndex: 'consequence', key: 'consequence',
    }, {
        title: '措施', dataIndex: 'measure', key: 'measure',
    }, {
        title: '责任人', dataIndex: 'dutier', key: 'dutier',
    }, {
        title: '风险等级', dataIndex: 'level', key: 'level', render: t => <Rate disabled={true} value={t}/>
    }]

    return <Modal
        open={visible}
        title={"全部风险点"}
        centered={true}
        width={800}
        footer={null}
        onCancel={onCancel}
    >
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
        />

    </Modal>
}