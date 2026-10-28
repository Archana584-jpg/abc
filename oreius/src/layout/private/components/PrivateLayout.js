import React from 'react'
import { Layout } from 'antd';
import {
    Route,
    Switch,
} from 'react-router-dom'
import { contentRoutes } from '../../../navigation/routes'
import { CustomSidebar } from '../../../shared/components';
const { Content } = Layout;

const PrivateLayout = ({ navigateTo }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <CustomSidebar navigateTo={navigateTo}/>
            <Layout>
                <Content
                    className='privateLayoutContent'
                >
                    <Switch>
                        {contentRoutes && contentRoutes.map((item, index) => <Route key={index} exact path={item.path} component={item.component} />)}
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}

export default PrivateLayout