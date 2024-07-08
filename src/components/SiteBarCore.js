import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../main.css';
import { CSidebar, CSidebarHeader, CSidebarBrand, CSidebarNav, CNavTitle, CNavItem, CNavGroup, CBadge, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilViewQuilt, cilGradient, cilHome, cilBarChart, cilDollar, cilBrowser } from '@coreui/icons'

const vars = {
    '--cui-sidebar-nav-link-padding-x': "4px",
    '--cui-sidebar-nav-link-padding-y': "4px",
    '--cui-sidebar-nav-link-color': "rgb(255,255,255)",
    '--cui-sidebar-width': "222px",
    '--cui-sidebar-brand-bg': "rgba(255,255,255,0)",
    '--cui-sidebar-header-height': '30px'
}

function SiteBarCore() {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily:"IBM Plex Sans",fontSize:"13px"}}>
            <CSidebar className="border-end" style={vars}>
            <CSidebarHeader >
                <CSidebarBrand style={{justifyContent: "left"}}><CIcon customClassName="nav-icon" icon={cilDollar} style={{height: "20"}} />CRYPTOData</CSidebarBrand>
            </CSidebarHeader>
            <CSidebarNav>
                <CNavTitle>Nav Title</CNavTitle>
                <CNavItem href="/"><CIcon customClassName="nav-icon" icon={cilHome} /> Home</CNavItem>
                <CNavItem href="/heatmap/"><CIcon customClassName="nav-icon" icon={cilViewQuilt} /> Heatmap </CNavItem>
                {/* <CNavGroup
                        toggler={
                            <>
                            <CIcon customClassName="nav-icon" icon={cilBarChart} /> Charts
                            </>
                        }
                        >
                        <CNavItem href="/charts/"><span className="nav-icon"><span className="nav-icon-bullet"></span></span> Chart1</CNavItem>
                        <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span> Nav dropdown item</CNavItem>
                </CNavGroup> */}
                <CNavItem href="/charts/"><CIcon customClassName="nav-icon" icon={cilBarChart} /> Chart</CNavItem>
                <CNavItem href="/backend/"><CIcon customClassName="nav-icon" icon={cilGradient} /> Backend</CNavItem>
                <CNavItem href="/dbdata/"><CIcon customClassName="nav-icon" icon={cilBrowser} /> DbData </CNavItem>
                <CNavItem href="/embed/"><CIcon customClassName="nav-icon" icon={cilBrowser} /> Embedding </CNavItem>
            </CSidebarNav>
            
          
            </CSidebar>
        </div>
  )
}

export default SiteBarCore
