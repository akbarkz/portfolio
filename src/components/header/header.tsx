import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  MenuOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { Col, Drawer, Row } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import config from '@config/index';

import { headerStyles } from './header.styles';

const Header = () => {
  const { t } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <AntHeader css={headerStyles}>
      <Row>
        <Col xs={12} sm={16} lg={0}>
          <MenuOutlined className="sandwich-button" onClick={openDrawer} />
        </Col>
        <Col hidden lg={20}>
          <Link href="/about">{t('about')}</Link> {t('projects')} {t('stack')} {t('education')}{' '}
          <Link href={config.urls.cv} download>
            {t('cv')}
          </Link>
        </Col>
        <Col xs={12} sm={8} lg={4} className="links">
          <Link href={config.urls.github} target="_blank" className="link-icon">
            <GithubOutlined />
          </Link>
          <Link href={config.urls.linkedIn} target="_blank" className="link-icon">
            <LinkedinOutlined />
          </Link>
          <Link href={config.urls.phone} target="_blank" className="link-icon">
            <WhatsAppOutlined className="link-icon" />
          </Link>
          <Link href={config.urls.email} target="_blank" className="link-icon">
            <MailOutlined className="link-icon" />
          </Link>
        </Col>
      </Row>
      <Drawer placement="left" open={isDrawerOpen} onClose={closeDrawer} />
    </AntHeader>
  );
};

export { Header };
