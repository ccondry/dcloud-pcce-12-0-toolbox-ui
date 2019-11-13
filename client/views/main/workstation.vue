<template>
  <div>
    <b-loading :active="loading.app.session" />
    <div class="tile is-ancestor">
      <div class="tile is-parent is-12 is-vertical">
        <article class="tile is-child box">
          <h1 class="title">Workstation Connection Information</h1>
          <div class="content">
            <p>
              After you have connected to the demo session
              <router-link :to="{name: 'VPN'}">VPN</router-link>,
              you can connect to the Workstation using Microsoft Remote Desktop
              Client to run your demos. Depending on your laptop OS and
              configuration, you may or may not need to enter the "dcloud\"
              prefix with your username.
            </p>
            <p>
              If you have any issues connecting to
              the Workstation using the FQDN, then you can either try using the
              IP address instead, or if you are on Windows try rebooting Windows
              to resolve this AnyConnect-related DNS issue.
            </p>
            <ul>
              <li>Address: <strong>{{ rdpAddress }}</strong></li>
              <li>Username:
                <div class="select" v-if="myAgentUsernames.length">
                  <select class="input">
                    <option v-for="username of myAgentUsernames">{{ username }}</option>
                  </select>
                </div>
                <span v-else>(none found)</span>
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
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
    }
  },
  mounted () {
    // load agents if they're not loaded yet
    if (this.user.username) {
      return this.refresh(false)
    }
  },
  methods: {
    ...mapActions(['searchCceObjects']),
    async refresh (showNotification) {
      if (this.user.username) {
        if (!this.myAgents.length) {
          // wait for department first
          await this.searchCceObjects({type: 'department', query: {name: this.user.id}, showNotification})
          // now load all agents
          this.searchCceObjects({type: 'agent', showNotification})
        }
      }
    }
  },
  computed: {
    ...mapGetters(['user', 'cceObjects', 'loading', 'myDepartment', 'rdpAddress']),
    // get sorted list of agents belonging to this user's department
    myAgents () {
      try {
        // filter agents to this user's department
        const agents = this.cceObjects['agent']
        .filter(v => v.department && v.department.refURL === this.myDepartment.refURL)
        // create mutable copy of data
        const agentsCopy = JSON.parse(JSON.stringify(agents))
        // return sorted agents
        return agentsCopy.sort((a, b) => {
          return Number(a.agentId) - Number(b.agentId)
        })
      } catch (e) {
        return []
      }
    },
    myAgentUsernames () {
      try {
        return this.myAgents.map(v => {
          // remove @dcloud.cisco.com from supervisors
          const i = v.person.userName.indexOf('@')
          if (i >= 0) {
            return 'dcloud\\' + v.person.userName.slice(0, i)
          } else {
            return 'dcloud\\' + v.person.userName
          }
        })
      } catch (e) {
        return []
      }
    }
  }
}
</script>
