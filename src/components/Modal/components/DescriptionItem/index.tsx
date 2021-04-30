import React from 'react';
import { Row, Col, Statistic, Divider } from 'antd';
import styles from './index.less';
interface IDescription {
    consumed: number;
    rate: number;
}
const DescriptionItem: React.FC<IDescription> = (props) => {
    return (
        <div className={styles['description']}>
            <Row gutter={16}>
                <Col span={10}>
                    <Statistic title='Consumed' value={props.consumed} suffix='KWh'></Statistic>
                </Col>
                <Col span={1} className={styles['col']}>
                    <Divider type='vertical' style={{ height: '70%' }} />
                </Col>
                {/* <Col span={10}>
                    <Statistic title='Costs' value={props.rate} suffix='USD' />
                </Col>
                <Col span={1} className={styles['col']}>
                    <Divider type='vertical' style={{ height: '70%' }} />
                </Col> */}
            </Row>
        </div>
    );
};
export default DescriptionItem;
