<template>
  <div>
    <div class="tile is-ancestor" style="flex-wrap: wrap;">
      <!-- <div class="tile"> -->
        <!-- repeat this tile for each agent -->
        <div class="tile is-parent" v-for="agent of agents">
          <article class="tile is-child box" style="min-width: 16em;">

            <p class="title">{{ agent.name }}</p>
            <p class="subtitle">{{ agent.description }}</p>
            <img :src="agent.picture" width="128px">
            <p>
              <strong>Username:
              <span class="grey-background">
                {{ agent.username }}
              </span>
              </strong>
              <a @click="clickCopy(agent.username, 'Username')"><b-icon icon="layers"></b-icon></a>
            </p>
            <p>
              <strong>Password:
              <span class="grey-background">
                {{ agent.password }}
              </span>
              </strong>
              <a @click="clickCopy(agent.password, 'Password')"><b-icon icon="layers"></b-icon></a>
            </p>
            <p>
              <strong>Extension:
                <span class="grey-background">
                  {{ agent.extension }}
                </span>
              </strong>
              <a @click="clickCopy(agent.extension, 'Extension')"><b-icon icon="layers"></b-icon></a>
            </p>
          </article>
        <!-- </div> -->

      </div>
    </div>
    <!-- <center>
    <b-field>
    <button class="button is-success" @click="clickPortal">Go to Webex Contact Center Portal</button>
  </b-field>
</center> -->

<input type="hidden" id="clipboard" :value="clipboard">

</div>
</template>


<script>
export default {
  props: ['user'],

  data () {
    return {
      portalUrl: 'https://portal.ccone.net',
      clipboard: 'initial-value'
    }
  },

  computed: {
    agents () {
      return [
        {
          picture: 'https://mm.cxdemo.net/static/images/cumulus/common/sandra.png',
          username: 'sjeffers',
          password: 'C1sco12345',
          extension: '1080' + this.user.id,
          name: 'Sandra Jefferson',
          role: 'Agent',
          description: 'Main Agent'
        },
        {
          picture: 'https://mm.cxdemo.net/static/images/cumulus/common/josh.png',
          // username: 'jopeters' + this.user.id + '@dcloud.cisco.com',
          username: '1081' + this.user.id,
          password: 'C1sco12345',
          extension: '1081' + this.user.id,
          name: 'Josh Peterson',
          role: 'Agent',
          description: 'CRM Agent'
        },
        {
          picture: 'https://mm.cxdemo.net/static/images/cumulus/common/trudy.png',
          // username: 'trujones' + this.user.id + '@dcloud.cisco.com',
          username: '1087' + this.user.id,
          password: 'C1sco12345',
          extension: '1087' + this.user.id,
          name: 'Trudy Vere-Jones',
          role: 'Agent',
          description: 'CRM Agent'
        },
        {
          picture: 'https://mm.cxdemo.net/static/images/cumulus/common/owen.png',
          username: 'oharvey',
          password: 'C1sco12345',
          extension: '1085' + this.user.id,
          name: 'Owen Harvey',
          role: 'Agent',
          description: 'Outbound Agent'
        },
        {
          picture: 'https://mm.cxdemo.net/static/images/cumulus/common/annika.png',
          username: 'annika',
          password: 'C1sco12345',
          extension: '1086' + this.user.id,
          name: 'Annika Hamilton',
          role: 'Agent',
          description: 'Outbound Agent'
        },
        {
          picture: 'https://mm.cxdemo.net/static/images/cumulus/common/helen.png',
          username: 'hliang',
          password: 'C1sco12345',
          extension: '1083' + this.user.id,
          name: 'Helen Liang',
          role: 'Agent',
          description: 'UWF Agent'
        },
        {
          picture: 'https://mm.cxdemo.net/static/images/cumulus/common/rick.png',
          username: 'rbarrows' + this.user.id + '@dcloud.cisco.com',
          password: 'C1sco12345',
          extension: '1082' + this.user.id,
          name: 'Rick Barrows',
          role: 'Supervisor',
          description: 'Main Supervisor'
        },
        {
          picture: 'https://mm.cxdemo.net/static/images/cumulus/common/james.png',
          username: 'jabracks' + this.user.id + '@dcloud.cisco.com',
          password: 'C1sco12345',
          extension: '1084' + this.user.id,
          name: 'James Bracksted',
          role: 'Supervisor',
          description: 'UWF Supervisor'
        }
      ]
    }
  },

  methods: {
    clickPortal (e) {
      // open agent portal in new tab, or same tab if they have it open already
      window.open(this.portalUrl, 'ccone')
    },
    clickCopy (s, type) {
      // copy text to clipboard
      const input = document.createElement('input')
      document.body.appendChild(input)
      input.value = s
      input.focus()
      input.select()
      const result = document.execCommand('copy')
      if (result === 'unsuccessful') {
        // failed
        console.error('Failed to copy text.')
      } else {
        // success
        // this.$snackbar.open({
        //   message: 'Text Copied',
        //   type: 'is-success',
        //   position: 'is-top'
        // })
        this.$toast.open({
          message: type + ' Copied to Your Clipboard',
          queue: false
        })
      }
      input.remove()
    }
  }
}
</script>

<style lang="scss">
.grey-background {
  background-color: rgb(240, 240, 240);
}
</style>
