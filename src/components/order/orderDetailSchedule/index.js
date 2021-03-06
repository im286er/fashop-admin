// @flow
import React, { Component } from "react";
import {
    Card,
    Steps,
    Popover
} from "antd";
import styles from "./index.css";
import { View } from "react-web-dom";

const Step = Steps.Step;
type Props = {
}
type State = {
    stepCurrent:number
}
export default class OrderDetailSchedule extends Component<Props, State> {
    state = {
        stepCurrent: 1
    }
    render() {
        const { stepCurrent } = this.state
        const setpList = [
            {
                title:'已付款',
                description:'2017-12-25 14:27:01',
            },{
                title:'待发货',
                description:'',
            },{
                title:'待收货',
                description:'',
            },{
                title:'待评价',
                description:'',
            },{
                title:'完成',
                description:'',
            }
        ]
        const customDot = (dot, { status, index }) => (
            <Popover content={<span>step {index} status: {status}</span>}>
                {dot}
            </Popover>
        )
        return (
            <View className={`${styles.cardWarp} OrderDetailSchedule`}>
                <Card title="订单进度">
                    <Steps current={stepCurrent} progressDot={customDot}>
                        {
                            setpList.map((item,index) =>
                                <Step
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                />
                            )
                        }
                    </Steps>
                </Card>
            </View>
        )
    }
}
