# HOK.OS - Cannabis Supply Chain Intelligence Platform

> **Portfolio Project Overview**
> Custom-built enterprise SaaS application for cannabis cultivation and wholesale operations
> Development Time: ~8 hours

---

## Executive Summary

HOK.OS is a comprehensive cannabis supply chain management platform built to streamline cultivation operations, optimize wholesale pricing strategies, and provide deep sales intelligence across multi-location facilities. The platform delivers real-time inventory visibility, partner management, and data-driven forecasting capabilities for cannabis wholesale operations.

**Key Value Propositions:**
- Unified view of cultivation, inventory, and sales across multiple facilities
- Real-time pricing optimization with margin analysis
- Partner and dispensary relationship management with CRM integration
- Production pipeline visibility from grow room to retail shelf
- Role-based multi-tenant architecture for secure organizational data isolation

---

## Platform Capabilities

### 1. Executive Dashboard & KPI Monitoring

The command center for daily operations with at-a-glance visibility into business health:

- **Active Strain Portfolio** - Track cultivar count with recommended strain indicators
- **Quality Distribution** - Visual breakdown of Premium, Standard, and Value tier inventory
- **THC Potency Analytics** - Average potency tracking across the catalog
- **Inventory Valuation** - Real-time estimated value with wholesale pricing
- **Upcoming Harvest Pipeline** - Calendar view with plant counts and projected yields
- **Top Performer Leaderboard** - Strain rankings by quality score, THC percentage, and terpene profiles

*Design: Dark-themed glass-panel interface with animated KPI cards and color-coded quality indicators*

---

### 2. Sales Intelligence Suite

Comprehensive revenue analytics and performance tracking:

#### Sales Pulse Dashboard
- Year-to-date revenue with growth trending vs. baseline periods
- Total units sold with average order value calculations
- Month-over-month revenue change indicators
- Top performing strain identification with revenue share percentage
- 12-month revenue trend visualization with interactive bar charts

#### Strain Performance Analysis
- Sortable rankings by revenue, units sold, market share, and trend direction
- Individual strain cards showing:
  - Revenue and unit totals
  - Market share percentage with visual progress bars
  - Average price per unit
  - Trend analysis with percentage change indicators
- Expandable detail rows with package-size breakdown and 6-month micro-charts

#### Market Mix Analytics
- Package composition analysis (pre-rolls, eighths, quarters)
- Revenue share vs. unit share comparison
- Trend analysis comparing early vs. late period performance
- Stacked visualization charts
- Average price calculations by package format

---

### 3. Financial Analytics & Profit Optimization

Deep-dive financial intelligence for pricing strategy:

#### Inventory Valuation Engine
- Estimated inventory value calculation (pounds x wholesale pricing)
- Gross profit potential with margin percentage
- Unit conversion (eighth equivalents per pound)
- Wholesale revenue projections

#### Multi-Tier Pricing Analysis
- White Label wholesale pricing tier
- C-Grade flower pricing
- Trim and byproduct valuation
- COGS and margin calculations per tier

#### Profit Analysis Dashboard
- Total commission revenue metrics
- Blended margin analysis across package sizes
- Average profit per unit with volume context
- Pricing consistency score (0-100 stability rating)
- **Margin Analysis by Package:**
  - Pre-roll margins (~21%)
  - Eighth margins (~7%)
  - Quarter margins (~4%)
- **Anomaly Detection:**
  - Automated pricing outlier identification
  - Alerts for unusual margin patterns
  - Variance analysis from historical means

#### Retail Pricing Flow Visualization
- Cost-to-wholesale-to-retail margin breakdown
- Visual margin distribution bars
- Percentage allocation for COGS, wholesale margin, and retailer margin

---

### 4. Cultivation & Production Management

End-to-end visibility into the production pipeline:

#### Strain Inventory Management
- Searchable strain database with genetic lineage
- Multi-location filtering (facility-based views)
- Quality tier categorization (Premium 9-10, Standard 7-8, Value <7)
- Recommended strain flagging for sales focus
- Advanced sorting by quality, THC, terpene content, or location
- Profile completeness indicators for terpenes, effects, and flavors

#### Harvest Tracking System
- Harvest calendar with room assignments
- Plant count projections
- Final dry weight estimates
- Multi-strain harvest grouping
- Status workflow: Scheduled > In Progress > Harvested > Drying > Curing > Complete
- Detailed harvest breakdowns by strain composition

#### Grow Room Management
- Room inventory tracking
- Capacity monitoring
- Environmental status indicators

---

### 5. Advanced Inventory Command Center

Enterprise-grade inventory operations:

- **Aggregated Summary** - Cross-location inventory totals
- **Availability Tracking** - Real-time available vs. reserved inventory
- **Location Splitting** - Facility-based inventory segmentation
- **Order Status Tracking** - Full lifecycle visibility
  - Draft > Confirmed > Picking > Shipped > Delivered
- **Inventory Forecasting** - Upcoming availability projections
- **Batch Matrix** - Batch-level availability detail
- **Order Creation** - Integrated order workflow from inventory view
- **Advanced Filtering** - Multi-dimensional search and filter capabilities

---

### 6. Strain Discovery & Compound Library

Scientific product knowledge base:

#### Strain Finder
- Filter by strain type (Indica, Sativa, Hybrid)
- Terpene-based searching with multi-select chips
- Effects-based filtering (creative, relaxed, focused, etc.)
- Flavor profile filtering
- Real-time strain card display with:
  - Genetic lineage
  - Terpene percentage breakdowns
  - Effect and flavor tags
  - THC/CBD ranges
- Expandable detail sheets

#### Compound Library
- Terpene encyclopedia with effect associations
- Cannabinoid database (THC, CBD, CBN, etc.)
- Effect profiles with compound relationships
- Molecular information and therapeutic benefits
- Interactive comparison tools

---

### 7. Customer & Partner Relationship Management

Dispensary and partner ecosystem management:

#### Customer Database
- Dispensary information with full contact details
- Geographic map visualization
- Customer status tracking (Prospect > Active > Inactive > Churned)
- Lifetime value calculations
- Chain and multi-location aggregation
- Communication history tracking

#### Partner Management
- Cultivation partner profiles
- Contract terms management
- Commission agreement tracking
- Revenue share structures

#### CRM Integration (Pipedrive)
- Bi-directional data synchronization
- Organization sync (companies)
- Contact sync (persons with email/phone)
- Deal tracking with status (open, won, lost)
- Connection testing and sync statistics
- Manual and scheduled sync capabilities

---

### 8. Geographic Intelligence

Visual market coverage and territory management:

- **Interactive Missouri Map** - State-focused dispensary visualization
- **Color-Coded Markers** - Status-based visual differentiation
- **Click-to-Detail Popups** showing:
  - Store name and chain affiliation
  - Location and market zone
  - Contact information
  - Relationship status
  - Lifetime transaction value
- **Map Controls** - Zoom, pan, and locate features
- **Theme-Aware Styling** - Light and dark mode support

---

### 9. Forecasting & Revenue Modeling

Predictive analytics for business planning:

- **Partner Revenue Forecasting** - Projected revenue calculations
- **Historical Benchmarking** - Past performance integration
- **Commission Modeling:**
  - Basis selection (gross revenue vs. gross profit)
  - Tiered commission rate configuration
  - Volume-based projections
- **What-If Scenario Modeling** - Interactive sliders for variable adjustment
- **Partner Contract Term Integration** - Contract-specific forecasting
- **Visual Trend Analysis** - Combined bar and line chart visualization

---

### 10. Administration & System Management

Complete platform administration:

#### Organization Administration
- Organization overview dashboard
- Settings configuration
- Integration management portal

#### User Management
- Team member CRUD operations
- Role assignment (Owner, Sales, Vendor, Retail, Team)
- Organization-scoped permissions
- User status management (Active/Inactive)

#### Strain Catalog Administration
- Master strain database management
- Bulk operations
- Lineage, type, and profile configuration
- Image upload and gallery management
- Quality rating and THC range settings
- Recommended strain flagging

---

### 11. Multi-Organization Architecture (Bridge)

Enterprise platform management for super-administrators:

- **System Overview Dashboard:**
  - Total organization count
  - Registered user metrics
  - Active user monitoring
  - System health indicators

- **Organization Management:**
  - Create and configure organizations
  - Metadata management (name, slug, settings)
  - Activation and deactivation controls

- **System User Management:**
  - Super-admin user creation
  - System-wide role assignment
  - Audit trail access

---

## Technical Architecture

### Frontend Technology Stack

| Component | Technology |
|-----------|------------|
| Framework | React 18 with TypeScript |
| Build Tool | Vite 5 |
| Routing | React Router v6 |
| State Management | TanStack React Query (server), Zustand (client) |
| Form Handling | React Hook Form + Zod validation |
| UI Components | shadcn/ui (Radix UI + Tailwind CSS) |
| Data Visualization | Recharts |
| Mapping | Leaflet + React-Leaflet |
| Animations | Framer Motion |
| Icons | Lucide React (460+ icons) |

### Backend Infrastructure

| Component | Technology |
|-----------|------------|
| Database | PostgreSQL (via Supabase) |
| Authentication | Supabase Auth (JWT-based) |
| Authorization | Row-Level Security (RLS) policies |
| API | Supabase Auto-generated REST API |
| File Storage | Supabase Storage |

### Security Model

- **Multi-Tenant Isolation** - Row-Level Security ensures complete data separation
- **Role-Based Access Control** - System-level and organization-level role hierarchy
- **JWT Session Management** - Secure token-based authentication
- **API Key Encryption** - Secure storage for third-party integrations

### Data Architecture

- **30+ Database Tables** across domain areas
- **20 Migration Scripts** for version-controlled schema
- **Comprehensive Type System** - Full TypeScript coverage
- **59 Custom React Hooks** - Reusable data and state management

---

## Design System

### Visual Language

- **Theme:** Dark-mode first with light-mode support
- **Color System:**
  - Background: Zinc/Slate dark palette
  - Primary Accent: Gold (#d4af37)
  - Status Colors: Emerald (success), Amber (warning), Red (error)
  - Strain Types: Purple (Indica), Orange (Sativa), Green (Hybrid)
  - Quality Tiers: Gold (Premium), Gray (Standard), Dark Gray (Value)

### UI Patterns

- **Glass Panel Cards** - Semi-transparent with backdrop blur
- **Status Badges** - Color-coded indicators throughout
- **Expandable Tables** - Click-to-expand detailed views
- **Filter Chips** - Tag-based multi-select filtering
- **Sortable Headers** - Interactive column sorting
- **KPI Cards** - Large numbers with trend indicators
- **Responsive Grid** - Mobile-first adaptive layouts

### Component Library

Pre-built, customizable components including:
- Cards, Buttons, Badges, Inputs, Labels
- Selects, Sheets, Dialogs, Modals
- Progress bars, Tabs, Sliders
- Data tables with sorting and filtering
- Toast notifications
- Theme toggle controls

---

## Integration Capabilities

### Current Integrations

**Pipedrive CRM**
- Full bi-directional sync
- Organization, contact, and deal management
- Activity and email statistics
- Connection health monitoring

### Planned Integrations

- **HubSpot CRM** - Marketing and sales automation
- **Metrc** - Cannabis compliance tracking
- **Additional mapping providers** - Enhanced geolocation services

### Integration Architecture

- Secure API key storage per organization
- Configurable sync scheduling
- Conflict detection and resolution
- Import source tracking with versioning
- Field-level override protection

---

## Key Differentiators

1. **Purpose-Built for Cannabis Wholesale** - Not a generic platform retrofitted for cannabis
2. **Multi-Facility Support** - Unified view across cultivation locations
3. **Margin Intelligence** - Deep profit analysis by strain, package size, and time period
4. **Production-to-Sale Visibility** - Full pipeline tracking from cultivation to retail
5. **Scientific Compound Database** - Terpene and cannabinoid knowledge base
6. **Enterprise Multi-Tenancy** - Secure organizational isolation with super-admin oversight
7. **CRM Integration** - Native Pipedrive sync for relationship management
8. **Anomaly Detection** - Automated identification of pricing and margin irregularities

---

## Development Metrics

| Metric | Value |
|--------|-------|
| Development Time | ~8 hours |
| Database Tables | 30+ |
| React Components | 90+ |
| Custom Hooks | 59 |
| Page Routes | 20+ |
| TypeScript Coverage | 100% |
| Migration Scripts | 20 |

---

## Screenshots & Visual Reference

*Available upon request:*
- Executive Dashboard with KPI cards
- Sales Pulse with revenue trending
- Strain Performance analysis view
- Profit Analysis with margin breakdown
- Interactive dispensary map
- Inventory Command Center
- Strain Finder with filter chips
- Admin user management interface

---

## Conclusion

HOK.OS demonstrates rapid delivery of a sophisticated, enterprise-grade SaaS platform tailored for cannabis industry operations. Built with modern technologies and best practices, the platform provides comprehensive visibility into cultivation, inventory, sales, and partner relationships while maintaining strict security through multi-tenant data isolation.

The combination of intuitive UI design, deep analytics capabilities, and extensible integration architecture makes HOK.OS a compelling example of custom business application development.

---

*Document prepared for portfolio presentation purposes. No customer data included.*
