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

import { headerStyles, headerOptionsStyles } from './header.styles';

const HeaderOptions = () => {
  const { t } = useTranslation();
  return (
    <div css={headerOptionsStyles}>
      <Link href="/about">{t('about')}</Link>
      <Link href="/projects">{t('projects')}</Link>
      <Link href="/stack">{t('stack')}</Link>
      <Link href="/education">{t('education')}</Link>
      <Link href={config.urls.cv} download>
        {t('cv')}
      </Link>
    </div>
  );
};

const Header = () => {
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
          <HeaderOptions />
        </Col>
        <Col xs={12} sm={8} lg={4} className="links">
          <Link href={config.urls.github} target="_blank" title="Github" className="link-icon">
            <GithubOutlined />
          </Link>
          <Link href={config.urls.linkedIn} target="_blank" title="LinkedIn" className="link-icon">
            <LinkedinOutlined />
          </Link>
          <Link href={config.urls.phone} target="_blank" title="Whatsapp" className="link-icon">
            <WhatsAppOutlined className="link-icon" />
          </Link>
          <Link href={config.urls.email} target="_blank" title="Email" className="link-icon">
            <MailOutlined className="link-icon" />
          </Link>
        </Col>
      </Row>
      <Drawer placement="left" open={isDrawerOpen} onClose={closeDrawer}>
        <HeaderOptions />
      </Drawer>
    </AntHeader>
  );
};

export { Header };
