# Coworker Microfrontend Template

A complete template for creating microfrontends that integrate with the coworker-web host application using Module Federation.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server runs at `http://localhost:3004`.

## Project Structure

```
coworker_template/
├── src/
│   ├── components/
│   │   ├── MainComponent.tsx           # Main entry for fullscreen mode
│   │   ├── UIComponentMap.ts           # Maps UIKEY → Components
│   │   ├── ExecutionComponentMap.ts    # Maps ACTION_ID → Components
│   │   ├── ui-components/              # UI component overrides
│   │   │   ├── HomeComponent.tsx
│   │   │   ├── ExecutionHistoryComponent.tsx
│   │   │   ├── ProcessFlowListComponent.tsx
│   │   │   ├── TablesListComponent.tsx
│   │   │   ├── TableComponent.tsx
│   │   │   ├── InsertTableRowComponent.tsx
│   │   │   ├── CreateTableComponent.tsx
│   │   │   ├── ProcessFlowInputFormComponent.tsx
│   │   │   └── ExecutionDataComponent.tsx
│   │   └── execution-components/       # Execution chain components
│   │       ├── SampleActionComponent.tsx
│   │       └── DataProcessingActionComponent.tsx
│   ├── types/
│   │   └── index.ts                    # All TypeScript types
│   ├── lib/
│   │   └── utils.ts                    # Utility functions
│   └── styles/
│       └── globals.css                 # Global styles
├── pages/
│   ├── _app.tsx                        # App wrapper (dev only)
│   └── index.tsx                       # Dev preview page
├── next.config.js                      # Module Federation config
├── tailwind.config.js                  # Tailwind configuration
├── tsconfig.json                       # TypeScript configuration
└── package.json
```

## Configuration

### 1. Update the Scope Name

In `next.config.js`, change the `name` to match your microfrontend:

```javascript
new NextFederationPlugin({
    name: "myCustomAgent",  // Change this!
    // ...
})
```

### 2. Register with Host

Add your microfrontend to the host's registry:

```typescript
// In coworker-web: src/lib/microfrontends/registry.ts
export const MICROFRONTEND_REGISTRY = {
    "my-custom-agent": {
        aiKey: "my-custom-agent",
        scope: "myCustomAgent",  // Must match name in next.config.js
        baseUrl: getUrl("NEXT_PUBLIC_MY_AGENT_URL", "http://localhost:3004"),
        displayMode: "embedded",  // or "fullscreen"
        mainComponent: "./MainComponent",
        uiComponentMapPath: "./UIComponentMap",
        executionComponentMapPath: "./ExecutionComponentMap",
        enabled: true,
    },
};
```

### 3. Add Environment Variable

```bash
# In coworker-web .env.local
NEXT_PUBLIC_MY_AGENT_URL=http://localhost:3004
```

## Component Types

### 1. Main Component (Fullscreen Mode)

Used when `displayMode: "fullscreen"`. The host renders this component for the entire UI.

```typescript
// src/components/MainComponent.tsx
export default function MainComponent({ 
    data, props, setUIKey, setProps, handleMessageSubmit 
}: MicrofrontendComponentProps) {
    // Your fullscreen UI
}
```

### 2. UI Components (Embedded Mode)

Override specific screens by UIKEY. The host uses these instead of defaults.

| UIKEY | Component | Description |
|-------|-----------|-------------|
| `home` | HomeComponent | Landing page |
| `executions_history_page` | ExecutionHistoryComponent | Past executions list |
| `processflows_list_page` | ProcessFlowListComponent | Available workflows |
| `table_component_page` | TableComponent | Table data grid |
| `tables_list_page` | TablesListComponent | Tables list |
| `table_insert_row_page` | InsertTableRowComponent | Insert row form |
| `table_create_page` | CreateTableComponent | Create table form |
| `processflow_input_form_page` | ProcessFlowInputFormComponent | Run workflow form |
| `execution_data_page` | ExecutionDataComponent | Execution details |

### 3. Execution Components

Custom components for specific actions in ExecutionChainWrapper.

```typescript
// src/components/ExecutionComponentMap.ts
export const EXECUTION_COMPONENT_MAP = {
    "your_action_unique_id": YourActionComponent,
};
```

## Customization Guide

### Adding a New UI Component

1. Create component in `src/components/ui-components/`
2. Export from `src/components/ui-components/index.ts`
3. Add to `UIComponentMap.ts` with the appropriate UIKEY

### Adding a New Execution Component

1. Create component in `src/components/execution-components/`
2. Export from `src/components/execution-components/index.ts`
3. Add to `ExecutionComponentMap.ts` with the action's `unique_id`

### Removing Components

To use host defaults, simply remove the component from the map:

```typescript
// Only override these UIKEYs
export const UI_COMPONENT_MAP = {
    [UIKEY.HOME]: HomeComponent,
    // Other UIKEYs will use host defaults
};
```

## Development

### Preview Page

The dev server includes a preview page at `http://localhost:3004` with:

- **Main Component** - Preview fullscreen mode
- **UI Components** - Test each UI component with mock data
- **Execution Components** - Test action components

### Testing with Host

1. Start the host: `cd coworker-web && npm run dev`
2. Start this microfrontend: `npm run dev`
3. The host will load components from `http://localhost:3004/_next/static/chunks/remoteEntry.js`

### Hot Reload

Changes to components will hot reload in both:
- The standalone dev page
- The host application (when running together)

## Dependencies

Ensure versions match the host:

```json
{
    "next": "15.5.3",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "@module-federation/nextjs-mf": "^8.8.2"
}
```

## Troubleshooting

### "Invalid hook call" Error

React version mismatch. Ensure:
1. Same React version as host
2. `singleton: true` in shared config

### Components Not Loading

1. Check remoteEntry.js is accessible
2. Verify scope name matches registry
3. Check browser console for errors

### Styles Not Applied

Use Tailwind classes (shared via host) or import CSS in components.

## Production Deployment

1. Build: `npm run build`
2. Deploy to your hosting (Vercel, Netlify, etc.)
3. Update host's environment variable with production URL
4. No host rebuild needed!

## Resources

- [Module Federation Docs](https://module-federation.github.io/)
- [Next.js Module Federation](https://github.com/module-federation/nextjs-mf)
- [Microfrontend Guide](../docs/MICROFRONTEND_GUIDE.md)
