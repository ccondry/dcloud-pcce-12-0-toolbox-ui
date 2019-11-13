<template>
  <div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-12 is-vertical">
        <article class="tile is-child box">
          <h1 class="title">Instructions for Windows</h1>
          <div class="content">
            <ol>
              <li>
                Download the <a :href="caCertUrl"><strong>{{ caName }}</strong> certificate</a>
              </li>
              <li>
                Open the certificate file. You will be prompted to install the certificate into Windows. Click "Install Certificate...".
              </li>
              <li>
                Choose <strong>Current User</strong> and click Next.
              </li>
              <li>
                Choose <strong>Place all certificates in the following store</strong> and click Browse.
              </li>
              <li>
                Choose <strong>Trusted Root Certification Authorities</strong> and click OK.
              </li>
              <li>
                Click Next and then click Finish. If prompted to accept and install/trust the new certificate, press Yes or OK.
              </li>
              <li>
                Repeat all steps for the <a :href="subCaCertUrl"><strong>{{ subCaName }}</strong> certificate</a>
              </li>
            </ol>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-12 is-vertical">
        <article class="tile is-child box">
          <h1 class="title">Instructions for Mac</h1>
          <div class="content">
            <ol>
              <li>
                Download the <a :href="caCertUrl"><strong>{{ caName }}</strong> certificate</a>
              </li>
              <li>
                Open the CA certificate file to copy the certificate into your Keychain. If prompted for "login" vs. "system", choose "login" (though both options will work).
              </li>
              <li>
                Open the Keychain Access app on your Mac, select the Certificates category, and search for "dcloud".
              </li>
              <li>
                Double-click the <strong>{{ caName }}</strong> certificate, expand Trust, and set "When using this certificate" to <strong>Always Trust</strong>.
              </li>
              <li>
                Repeat all steps for the <a :href="subCaCertUrl"><strong>{{ subCaName }}</strong> certificate</a>
              </li>
            </ol>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-12 is-vertical">
        <article class="tile is-child box">
          <h1 class="title">Instructions for Firefox</h1>
          <div class="content">
            <li>
              Open this link in Firefox:
              <a :href="caCertUrl"><strong>{{ caName }}</strong> certificate</a>
            </li>
            <li>
              You will be prompted to choose whether to trust the certificate. Check the box for "trust websites" and click OK.
            </li>
            <li>
              Repeat all steps for the <a :href="subCaCertUrl"><strong>{{ subCaName }}</strong> certificate</a>
            </li>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-12 is-vertical">
        <article class="tile is-child box">
          <h1 class="title">Instructions for Android</h1>
          <div class="content">
            <li>
              Open the <a :href="caCertUrl"><strong>{{ caName }}</strong> certificate</a> to install and trust it.
            </li>
            <li>
              Repeat all steps for the <a :href="subCaCertUrl"><strong>{{ subCaName }}</strong> certificate</a>
            </li>
          </div>
        </article>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['caCertUrl', 'subCaCertUrl', 'caName', 'subCaName'])
  }
}

</script>
