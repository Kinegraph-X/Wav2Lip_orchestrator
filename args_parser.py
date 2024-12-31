import argparse

parser = argparse.ArgumentParser(description='Worker which records an audio file from the mic, sneds it to a Google Notebook and retrieve the result of the computation')
parser.add_argument('--server_addr', type=str, 
					help='The remote machine that will compute the audio and video (a Ngrok tunnel may have been started from that Public URL)',
                    required=False,
                    default='http://127.0.0.1:3000'
                    )
parser.add_argument('--ssh_addr', type=str, 
					help='This orchestrator is meant to remotely start your server : please provide tu url/port of the ssh server',
                    required=True,
                    default=''
                    )
parser.add_argument('--debug', 
					help='This will replace the relative paths of the modules with absolute urls from the source code',
                    required=False,
                    action='store_true'
                    )
parser.add_argument('--dist', 
					help='This will define the paths of the modules relative to the dist folder',
                    required=False,
                    action='store_true'
                    )
args = parser.parse_args()