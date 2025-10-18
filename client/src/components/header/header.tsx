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

import config from '@config/index';

import { HeaderOptions } from './components/header-options';
import { Logo } from './components/logo';
import { useStickyHeader } from './header.hooks';
import { closeIconStyles, drawerHeaderStyles, headerStyles } from './header.styles';

const Header = () => {
  const scrollDirection = useStickyHeader();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <>
      <AntHeader css={headerStyles(scrollDirection)}>
        <Row>
          <Col xs={6} sm={14} md={0}>
            <MenuOutlined className="sandwich-button" onClick={openDrawer} />
          </Col>
          <Col className="logo" hidden md={2}>
            <Logo />
          </Col>
          <Col hidden md={15}>
            <HeaderOptions />
          </Col>
          <Col xs={18} sm={10} md={7} className="external-links">
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
        closeIcon={<CloseOutlined css={closeIconStyles} />}
        headerStyle={drawerHeaderStyles}
        placement="left"
        open={isDrawerOpen}
        onClose={closeDrawer}
        extra={<Logo closeDrawer={closeDrawer} />}
      >
        <HeaderOptions />
      </Drawer>
    </>
  );
};

export { Header };
