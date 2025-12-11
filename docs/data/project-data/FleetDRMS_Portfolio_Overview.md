# FleetDRMS: Enterprise Fleet Management Platform

## Portfolio Case Study | Custom Software Development

---

## Project Overview

**FleetDRMS** is a comprehensive fleet management and maintenance platform built for logistics companies operating Amazon DSP (Delivery Service Partner) fleets. The system unifies vehicle lifecycle management, preventive maintenance scheduling, and Amazon's Authorized Fleet Size (AFS) revenue recovery into a single, permission-based platform.

**Development Time:** ~8 hours
**Platform Type:** Multi-tenant SaaS
**Industry:** Logistics & Fleet Management

---

## The Challenge

Fleet operators managing Amazon delivery vehicles face unique operational challenges:

- **Complex Vehicle Tracking**: Managing diverse fleets across multiple vehicle types (sedans, SUVs, cargo vans, electric delivery vehicles)
- **Maintenance Coordination**: Balancing reactive repairs with preventive maintenance schedules
- **Revenue Loss**: Missing opportunities to recover fixed monthly payments (FMP) when vehicles are grounded for qualifying reasons
- **Multi-Location Operations**: Coordinating across multiple depots and service providers
- **Compliance & Audit**: Maintaining detailed records for Amazon partnership requirements

---

## The Solution

FleetDRMS delivers an integrated platform that addresses each challenge through purpose-built modules:

### Fleet Management Module

A real-time fleet dashboard providing complete visibility into vehicle operations:

- **Vehicle Inventory Management** with VIN tracking, ownership types, and service tier classification
- **Operational State Monitoring** tracking active, grounded, and archived vehicles
- **Odometer History** with inline editing and change tracking
- **Service Provider Integration** linking vehicles to authorized maintenance facilities
- **Bulk Import/Export** via CSV for fleet onboarding and reporting
- **Route Availability Analysis** calculating daily fleet capacity impact

### Maintenance & Service Module

Streamlined maintenance workflows designed for both office staff and field technicians:

- **Dual Entry Modes**: Standard comprehensive forms or Quick Entry for rapid field reporting
- **Issue Classification System** with categories, severity levels, and priority management
- **Assignment Workflow** routing work to appropriate technicians
- **Resolution Tracking** with structured completion reasons
- **Maintenance Timeline** providing complete service history per vehicle
- **Document Management** for attaching invoices, photos, and supporting materials
- **Notes System** for ongoing communication and documentation

### Preventive Maintenance (PM) Scheduling

Automated maintenance scheduling to maximize fleet uptime:

- **Reusable PM Templates** defining service checklists and intervals
- **Dual Triggers**: Schedule by time intervals or odometer readings
- **Automated Schedule Generation** creating upcoming service appointments
- **Compliance Dashboard** tracking PM completion rates
- **Service Due Alerts** preventing overdue maintenance

### AFS Revenue Recovery Module

A specialized feature that automatically identifies and tracks opportunities to recover Amazon's Fixed Monthly Payment when vehicles are unavailable:

- **Intelligent Eligibility Assessment**: Pattern-matching engine evaluates maintenance issues against Amazon's qualifying categories (warranty, title/registration, redeployment defects, preventive maintenance, specialty constraints)
- **Real-Time Feedback**: Eligibility status displays immediately as technicians enter issue details
- **Revenue Calculation Engine**: Automatically computes recovery amounts using Amazon's FMP rates by vehicle type
- **Submission Pipeline**: Track cases from eligible → submitted → under review → approved/denied
- **Amazon Case Integration**: Link maintenance records to Amazon support case IDs
- **Recovery Analytics Dashboard**: Monitor opportunities, submission rates, and approval metrics

---

## Technical Architecture

### Frontend Stack

| Technology | Purpose |
|------------|---------|
| React 18 + TypeScript | Type-safe, component-based UI |
| Vite | Next-generation build tooling |
| shadcn/ui + Radix | Accessible, customizable component library |
| Tailwind CSS | Utility-first responsive styling |
| TanStack React Query | Server state management with intelligent caching |
| TanStack React Table | High-performance data grids with virtualization |
| React Hook Form + Zod | Type-safe form validation |
| Recharts | Data visualization and analytics |

### Backend Architecture

| Technology | Purpose |
|------------|---------|
| Supabase | Managed PostgreSQL with real-time subscriptions |
| Row Level Security (RLS) | Database-enforced multi-tenant isolation |
| PostgreSQL Functions | Complex business logic (eligibility assessment, revenue calculation) |
| Real-time Subscriptions | Live data updates via WebSocket |

### Security & Multi-Tenancy

The platform implements enterprise-grade security through a layered approach:

- **Database-Level Isolation**: Row Level Security policies ensure organizations can only access their own data
- **Two-Tier Role System**: System administrators manage the platform; organization users operate within their tenant
- **Granular Permissions**: Resource-based permission model (`fleet:vehicles:edit`, `maintenance:records:create`, etc.)
- **Audit Logging**: Complete activity trails for compliance requirements

---

## User Experience Highlights

### Role-Based Dashboards

Each user type sees a tailored experience:

- **Operations Managers**: Fleet-wide KPIs, critical alerts, route availability impact
- **Maintenance Coordinators**: Work queue, assignment management, PM compliance
- **Field Technicians**: Quick entry forms, mobile-optimized interface
- **Finance Teams**: AFS recovery pipeline, revenue analytics, approval rates
- **Administrators**: User management, system configuration, audit logs

### Intelligent Data Entry

- **Quick Entry Mode**: Capture essential maintenance details in seconds from the field
- **Inline Editing**: Update odometers and key fields without navigating away
- **Auto-Assessment**: Real-time AFS eligibility feedback as users type
- **Smart Defaults**: Context-aware form pre-population

### Real-Time Operations

- **Live Dashboard Updates**: Data refreshes automatically across all connected users
- **Query Invalidation**: Changing organization context immediately refreshes all relevant data
- **Connection Status**: Visual indicators show real-time connection health

---

## Administrative Capabilities

### Organization Management

- Multi-organization support with complete data isolation
- Module enablement per organization (fleet, maintenance, PM, AFS)
- Custom organization settings and preferences

### User & Permission Administration

- Create and manage user accounts
- Assign roles with inherited permission sets
- Grant granular permissions for specific features
- Track user activity and security events

### System Configuration

- Configure FMP rates by vehicle type for AFS calculations
- Define issue categories and severity classifications
- Set up depot locations and service providers
- Manage fleet provider integrations

---

## Key Differentiators

1. **Amazon AFS Integration**: Purpose-built eligibility assessment and revenue recovery tracking—unique to FleetDRMS

2. **Rapid Development**: Full-featured platform delivered in approximately 8 development hours through modern tooling and component architecture

3. **Multi-Tenant Foundation**: Enterprise-ready architecture supporting unlimited organizations with complete isolation

4. **Real-Time by Default**: WebSocket-powered live updates eliminate stale data issues

5. **Field-Ready Design**: Quick entry mode and mobile responsiveness enable technician adoption

6. **Audit-Ready**: Comprehensive logging meets Amazon DSP compliance requirements

---

## Results & Impact

FleetDRMS enables fleet operators to:

- **Reduce Administrative Overhead**: Centralized vehicle and maintenance tracking eliminates spreadsheets and manual processes

- **Maximize Fleet Uptime**: Automated PM scheduling prevents unexpected breakdowns

- **Recover Lost Revenue**: AFS module identifies and tracks recovery opportunities that would otherwise be missed

- **Improve Visibility**: Real-time dashboards provide instant insight into fleet health and maintenance status

- **Scale Operations**: Multi-tenant architecture supports growth from single depot to enterprise-wide deployment

---

## Technology Showcase

This project demonstrates proficiency in:

- **Modern React Development**: Hooks, context, custom hooks, component composition
- **TypeScript**: Full type safety across the entire codebase
- **Database Design**: PostgreSQL with 300+ migrations, RLS policies, stored procedures
- **Real-Time Architecture**: WebSocket subscriptions for live data
- **Multi-Tenant SaaS**: Secure organization isolation patterns
- **UI/UX Design**: Accessible, responsive interfaces with shadcn/ui
- **State Management**: React Query for server state, Zustand for client state
- **Form Architecture**: Complex multi-step forms with validation
- **Permission Systems**: Granular, database-driven authorization

---

## Development Approach

FleetDRMS was built using an iterative, feature-driven approach:

1. **Foundation First**: Established multi-tenant database architecture with RLS security
2. **Core Features**: Built fleet and maintenance modules with real-time sync
3. **Specialized Features**: Added AFS revenue recovery with intelligent assessment
4. **Polish & UX**: Implemented quick entry, inline editing, and mobile optimization
5. **Administration**: Added comprehensive admin tools and audit logging

This approach delivered a production-ready platform in minimal development time while maintaining enterprise-grade architecture.

---

## Conclusion

FleetDRMS exemplifies modern full-stack development: a complex business domain translated into an intuitive, high-performance platform. The combination of React, TypeScript, Supabase, and thoughtful architecture patterns enabled rapid delivery without sacrificing quality, security, or scalability.

The platform stands ready for production deployment, supporting fleet operators from single-depot startups to enterprise logistics organizations.

---

*Built with React, TypeScript, Supabase, and shadcn/ui*
