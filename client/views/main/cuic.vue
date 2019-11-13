<template>
  <div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-12 is-vertical">
        <article class="tile is-child box">
          <h1 class="title">CUIC Reporting</h1>
          <div class="content">
            <p>
              Log in to
              <a href="https://cuic1.dcloud.cisco.com" target="cuic">
                CUIC
              </a>
              using any of your supervisor agents, listed below. You must be
              on the Workstation and/or the VPN to access the CUIC server.
            </p>
            <ul>
              <li>Address: <strong><a href="https://cuic1.dcloud.cisco.com" target="cuic">https://cuic1.dcloud.cisco.com</a></strong></li>
              <li>Username:
                <strong>
                  rbarrows{{ user.id }}
                </strong>
              </li>
              <li>Password: <strong>C1sco12345</strong></li>
            </ul>
          </div>
        </article>
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
