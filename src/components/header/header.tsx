import {
  CloseOutlined,
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

import {
  closeIconStyles,
  drawerHeaderStyles,
  headerStyles,
  headerOptionsStyles,
} from './header.styles';

const HeaderOptions = () => {
  const { t } = useTranslation();
  return (
    <div css={headerOptionsStyles}>
      <Link className="page-link" href="/about">
        {t('about')}
      </Link>
      <Link className="page-link" href="/projects">
        {t('projects')}
      </Link>
      <Link className="page-link" href="/stack">
        {t('stack')}
      </Link>
      <Link className="page-link" href="/education">
        {t('education')}
      </Link>
      <Link className="page-link" href={config.urls.cv} download>
        {t('cv')}
      </Link>
    </div>
  );
};

const CloseIcon = () => <CloseOutlined css={closeIconStyles} />;

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <>
      <AntHeader css={headerStyles}>
        <Row>
          <Col xs={12} sm={16} md={0}>
            <MenuOutlined className="sandwich-button" onClick={openDrawer} />
          </Col>
          <Col hidden md={16}>
            <HeaderOptions />
          </Col>
          <Col xs={12} sm={8} className="external-links">
            <Link href={config.urls.github} target="_blank" title="Github" className="link-icon">
              <GithubOutlined />
            </Link>
            <Link
              href={config.urls.linkedIn}
              target="_blank"
              title="LinkedIn"
              className="link-icon"
            >
              <LinkedinOutlined />
            </Link>
            <Link href={config.urls.phone} target="_blank" title="Whatsapp" className="link-icon">
              <WhatsAppOutlined />
            </Link>
            <Link href={config.urls.email} target="_blank" title="Email" className="link-icon">
              <MailOutlined />
            </Link>
          </Col>
        </Row>
      </AntHeader>
      <Drawer
        closeIcon={<CloseIcon />}
        headerStyle={drawerHeaderStyles}
        placement="left"
        open={isDrawerOpen}
        onClose={closeDrawer}
      >
        <HeaderOptions />
      </Drawer>
    </>
  );
};

export { Header };
