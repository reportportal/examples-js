## Example for [@reportportal/agent-js-mocha](https://www.npmjs.com/package/@reportportal/agent-js-mocha) with Selenium WebDriver

Selenium WebDriver examples for Chrome that report results to ReportPortal via the Mocha agent. Tests can run locally or on [Mobitru](https://mobitru.com/) cloud browsers.

## Prerequisites

- Node.js
- Google Chrome browser installed locally (for local runs only)

ChromeDriver is resolved automatically by [Selenium Manager](https://www.selenium.dev/documentation/selenium_manager/) (built into `selenium-webdriver` v4) when running tests locally.

## Configuration

Copy `.env.example` to `.env` and fill in the required values:

```cmd
cp .env.example .env
```

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RP_ENDPOINT` | Yes | ReportPortal API endpoint, e.g. `https://your-instance.com/api/v1` |
| `RP_API_KEY` | Yes | ReportPortal API key |
| `RP_PROJECT` | Yes | ReportPortal project name |
| `BROWSER_PROVIDER` | No | Browser provider: `local` (default) or `mobitru` |
| `MOBITRU_BILLING_UNIT` | For Mobitru | Team identifier or `personal` for individual accounts |
| `MOBITRU_ACCESS_TOKEN` | For Mobitru | Mobitru access key |
| `MOBITRU_HUB_URL` | No | Mobitru hub host (default: `browserhub-us.mobitru.com`) |
| `HEADLESS` | No | Set to `false` to run local Chrome in headed mode |

Example `.env`:

```env
# ReportPortal settings
RP_PROJECT=your_project
RP_ENDPOINT=https://your-instance.com/api/v1
RP_API_KEY=your_api_key

# Mobitru settings (only required when BROWSER_PROVIDER=mobitru)
BROWSER_PROVIDER=mobitru
MOBITRU_BILLING_UNIT=personal
MOBITRU_ACCESS_TOKEN=your_access_token
# MOBITRU_HUB_URL=browserhub-us.mobitru.com
```

ReportPortal options are read from `.env` in `main.js`:

```javascript
reporterOptions: {
  endpoint: process.env.RP_ENDPOINT,
  apiKey: process.env.RP_API_KEY,
  project: process.env.RP_PROJECT,
}
```

## Run test example

Install the packages:

```cmd
npm install
```

### Local Chrome

Make sure `BROWSER_PROVIDER` is not set to `mobitru` in `.env` (or remove it to use the default local provider).

```cmd
npm test
```

To run tests in headed mode (with a visible browser window):

```cmd
HEADLESS=false npm test
```

### Mobitru cloud browser

Configure Mobitru credentials as described in the [Mobitru Selenium initial configuration](https://mobitru.com/docs/initial-configuration-selenium/) docs and set `BROWSER_PROVIDER=mobitru` in `.env`.

Run tests against Mobitru with video recording enabled:

```cmd
npm run test:mobitru
```

The driver connects to `https://${MOBITRU_BILLING_UNIT}:${MOBITRU_ACCESS_TOKEN}@browserhub-us.mobitru.com/wd/hub` and passes `mobitru:options.enableVideo: true` so session video is recorded on the Mobitru side.

The Mobitru session ID is stored in the `mobitru_selenium_recording_id` test attribute via `driver.getSession().getId()` and can be used to download the recording after the session ends. See [Mobitru video recording](https://mobitru.com/docs/video-recording-2/) for details.

## Tests

- `tests/google.spec.js` — opens Google, verifies the page title, and sends a screenshot to ReportPortal
- `tests/example-domain.spec.js` — opens example.com, verifies the main heading, and sends a screenshot to ReportPortal

## Browser providers

| Provider | Env variable | Description |
|----------|--------------|-------------|
| Local    | default      | Headless Chrome on the local machine |
| Mobitru  | `BROWSER_PROVIDER=mobitru` | Remote Chrome on Mobitru with video recording |
